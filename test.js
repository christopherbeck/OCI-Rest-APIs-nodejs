var fs = require( 'fs' );
var oci = require( './oci' );

//
// default callback function
//
var callback = function(data) { console.log( data ); };

//
// Set up the auth object
//
var auth={
    tenancyId : 'ocid1.tenancy.oc1..aaaaaaaag2lewgpfx45exrgreh6ggn6yy5u3ceux6znsdiepplndtmmqonnq',
    userId : 'ocid1.user.oc1..aaaaaaaayzac5nk42n7klwgzzzatyy2vm45v7zc2l4vzwucjmoiymjtpvhka',
    keyFingerprint : 'd0:77:11:66:7b:a8:90:c0:ef:c7:5c:79:9d:c6:f4:24',
    RESTversion : '/20160918',
    region: 'us-ashburn-1'
};
auth.privateKey = fs.readFileSync('/Users/clbeck/.oci/oci_api_key.pem', 'ascii');

//
// set up parameters object
//
var parameters = {
  compartmentId : 'ocid1.compartment.oc1..aaaaaaaapfevjgs2bylnodtw7oojzrvyonna2e4vkkddzbos4zyxhr7jizka'
};

//
// List autonomous datawarehouses
//
oci.database.autonomousDataWarehouse.list( auth, parameters, callback );


//
// List autonomous datawarehouses and get first id
//
var adwId = '';
oci.database.autonomousDataWarehouse.list( auth, parameters, function(data){
  adwId = data[0].id;
} );
//wait until asqyn call finishes
require( 'deasync' ).loopWhile(function(){return adwId == '';})
console.log( 'autonomous database id: ' + adwId );

//
// change the freeform tags for autonomous datawarehouse using adwID above
//

// set up new parameters
var tags = { "freeformTags" : {"tag1": 123456, "tag2": "yyy", "anotherTag": "aaa" }};
parameters = {
    body : tags,
    autonomousDataWarehouseId : adwId
}
oci.database.autonomousDataWarehouse.update( auth, parameters, function(data){console.log(data);} );

/*
//
//  List files in objectStore bucket
//

parameters ={
  namespaceName: 'oraclecloud987',
  bucketName: 'pebbles'
}
oci.objectStore.obj.list( auth, parameters, function(data){
  for(var i=0; i<data.objects.length; i++ )
    console.log( data.objects[i].name );
} );

//
//  Rename file in objectstore bucket
//

// add body element to parameters
parameters.body = { sourceName : 'abc.jpg', newName : 'xyz.jpg' };
oci.objectStore.obj.rename( auth, parameters, callback );

auth.RESTversion = '/20180409';
oci.search.resourceType.list( auth, parameters, function(data){console.log(JSON.stringify(data[0]));}  );


/*
parameters = {
    compartmentId : 'ocid1.tenancy.oc1..aaaaaaaahm47pxqwunxjqel6jhiuyodldss4z2tx4m24cfmyqys3zndfw3ta',
    availabilityDomain: 'KgCo:US-ASHBURN-AD-1',
    //compartmentId : 'ocid1.compartment.oc1..aaaaaaaablk3uqbct3uvkzz4stugovjelbt4mkmt3oth2e6ebcxwub6jmtzq',
    vncId: 'ocid1.vcn.oc1.iad.aaaaaaaanoct32jijolnwc7vzwwgnwvsdtwdqjwlgzvlfx4o6as2v4unam7q',
    namespaceName : 'oraclecloud431'
}
/*
var query = '';
var queryParameterExists = false;
if( 'objectNamePrefix' in parameters ){
  query = query + ( queryParameterExists ? '&' : '?' ) +
          'objectNamePrefix=' + encodeURIComponent(parameters.objectNamePrefix);
  queryParameterExists = true;
}
if( 'limit' in parameters ){
  query = query + ( queryParameterExists ? '&' : '?' ) +
          'limit=' + encodeURIComponent(parameters.limit);
  queryParameterExists = true;
}
if( 'page' in parameters ){
  query = query + ( queryParameterExists ? '&' : '?' ) +
          'page=' + encodeURIComponent(parameters.page);
  queryParameterExists = true;
}

console.log( query );
*/

//oci.objectStore.bucket.list( auth, parameters, function(data){console.log(data);} );
//oci.iam.availabilityDomain.list( auth, parameters, function(data){console.log(data);} );
//oci.core.shape.list( auth, parameters, function(data){console.log(data);} );
//oci.core.subnet.list( auth, parameters, function(data){console.log(data);} );
//oci.core.vcn.list( auth, parameters, function(data){console.log(data);} );
//oci.iam.user.list( auth, parameters, function(data){console.log(data);} );

//auth.RESTversion = '/20171215';
//oci.fileStorage.fileSystemSummary.list( auth, parameters, function(data){console.log(data);} );

//auth.RESTversion = '/20160918';
//oci.database.autonomousDatabase.list( auth, parameters, function(data){console.log(data);} );

parameters.fileName = "/Users/clbeck/a";
parameters.fileName = "/Users/clbeck/Documents/Autonomous Data Warehouse Blog.docx";
parameters.fileName = "/Users/clbeck/Desktop/94927a.jpg";
//parameters.fileName = "/Users/clbeck/Desktop/phani.txt";
parameters.objectName = 'phani.jpg';
parameters.namespaceName = 'oraclecloud987';
parameters.bucketName = 'pebbles';
parameters.body = { object : 'phani.jpg' };
//oci.objectStore.obj.createMultipartUpload( auth, parameters, function(data){console.log(data);})
//oci.objectStore.obj.put( auth, parameters, function(data){console.log(data);}  );
/*
var uploadId;
var cont = false;
var readChunk = require('read-chunk');

oci.objectStore.obj.createMultipartUpload( auth, parameters, 
  function(data){
    uploadId = data.uploadId;
    cont = true;
  });
require( 'deasync' ).loopWhile(function(){return !cont;});
parameters.uploadId = uploadId;

var fs = require( 'fs' );
var bytes = fs.statSync(parameters.fileName)["size"];
var chunkSize = 1024;
var chunks = Math.trunc(bytes/chunkSize) + 1;
var parts = 0;
for( var i=0; i<chunks; i++ )
{

 buffer = readChunk.sync( parameters.fileName, i*chunkSize, chunkSize );
 parameters.body = buffer;
 parameters.uploadPartNum = i+1;
 oci.objectStore.obj.uploadPart( auth, parameters, function(data){
   console.log( JSON.stringify( 'etag >>>> ' + data.etag ));
   parts = parts + 1;
   });
}
require( 'deasync' ).loopWhile(function(){return parts != chunks;})

var commitBody = {"partsToCommit" : [] };
cont = false;
parameters.body = '';
oci.objectStore.obj.listMultipartUploadParts( auth, parameters, function(data){
  for( var i=0; i<data.length; i++ ){
    commitBody.partsToCommit.push( {'partNum': data[i].partNumber, 'etag': data[i].etag });
    cont = i == chunks-1;
  }
});
require( 'deasync' ).loopWhile(function(){return !cont;})

console.log(commitBody);

parameters.body = commitBody;
oci.objectStore.obj.commitMultipartUpload( auth, parameters, function(data){ console.log(data);} );

/*
    var chunk;
    var chunkSize = 10;
    for( var i=0; i< 10; i++){
    var readStream = fs.createReadStream(parameters.fileName, {start: i*chunkSize, end:(i*chunkSize) + (chunkSize-1)});
    readStream
      .on('readable', function(){
        while(null !== (chunk = readStream.read()))
          console.log(chunk);
      })
      .on('end', function(){
        console.log(chunk);
      })
    }

    */
/*
oci.objectStore.obj.listMultipart( auth, parameters, function(data){
  d = data;
  console.log(data);
  for( var i=0; i<data.length; i++ ){
    parameters.uploadId = data[i].uploadId;
    parameters.objectName = data[i].object;
    oci.objectStore.obj.abortMultipart( auth, parameters, function(d){console.log(d);} );
  }
});
*/
/*
auth.compartmentId = 'ocid1.compartment.oc1..aaaaaaaaoii6dck3vphxejxnu66gxrlxvi4yv2igdnuss5la2myxojilpuaa';
auth.RESTversion = '/20160918';
auth.limit = 100;
oci.database.dbVersionSummary.list( auth, parameters, function(data){console.log(data);});
*/
/*
var o = {
  a : 12345,
  b : 67890,
  c : 'abc',
  d : 'xyz',
  'a-b' : 'blah'
};

var u = {};

headers = [ 'a', 'e', 'd', 'a-b', 'z' ];

for ( var i=0; i<headers.length; i++ ) {
  if ( headers[i] in o )
    u[headers[i]] = o[headers[i]];
}

console.log( u );
*/
var fs = require( 'fs' );
var oci = require( './oci.js' );
var readChunk = require('read-chunk');

// build auth object
var auth={
    tenancyId : 'ocid1.tenancy.oc1..aaaaaaaahm47pxqwunxjqel6jhiuyodldss4z2tx4m24cfmyqys3zndfw3ta',
    userId :    'ocid1.user.oc1..aaaaaaaakb5c25jsxn3xx6jdi5gfoqmtlyb6rwfhqmreucv76ubnofnbspna',
    keyFingerprint : 'd0:77:11:66:7b:a8:90:c0:ef:c7:5c:79:9d:c6:f4:24',
    RESTversion : '/20160918',
    //RESTversion : '/20180115',
    //RESTversion: '/20171215',
    region: 'us-ashburn-1',
    privateKeyPath: '/Users/clbeck/.oci/oci_api_key.pem'
};
auth.privateKey = fs.readFileSync(auth.privateKeyPath, 'ascii');

// set up the parameter object
var parameters = {
      //fileName : "/Users/clbeck/Documents/Autonomous Data Warehouse Blog.docx",
      //fileName : "/Users/clbeck/Desktop/phani.txt",
      fileName : "/Users/clbeck/Desktop/94927a.jpg",
      objectName : '94927a.jpg',
      namespaceName : 'oraclecloud987',
      bucketName : 'pebbles',
      compartmentId : 'ocid1.tenancy.oc1..aaaaaaaahm47pxqwunxjqel6jhiuyodldss4z2tx4m24cfmyqys3zndfw3ta',
      //body : { 'object' : '94927a.jpg' } 
    };
/*
// create the multi part upload
oci.objectStore.obj.createMultipartUpload( auth, parameters, 
  function(data){
    parameters.uploadId = data.uploadId;
  });
require( 'deasync' ).loopWhile(function(){return parameters.uploadId == undefined;});
// calculate the number of chunks for the file
var fileSizeInBytes = fs.statSync(parameters.fileName)["size"];
var chunkSize = 2048;  
var chunks = Math.trunc(fileSizeInBytes/chunkSize) + 1;
var parts = 0;

// loop over the file, chunking it and uploading each chunk
for( var i=0; i<chunks; i++ )
{
 parameters.body = readChunk.sync( parameters.fileName, i*chunkSize, chunkSize );
 parameters.uploadPartNum = i+1;
 oci.objectStore.obj.uploadPart( auth, parameters, function(){ parts += 1; });
}
require( 'deasync' ).loopWhile(function(){return parts != chunks;})


// list all the upload parts and build the partsToCommit array
parts = 0;
parameters.body = '';
var partsToCommitBody = {"partsToCommit" : [] };
oci.objectStore.obj.listMultipartUploadParts( auth, parameters, function(data){
  for( var i=0; i<data.length; i++ ){
    partsToCommitBody.partsToCommit.push( {'partNum': data[i].partNumber, 'etag': data[i].etag });
    parts += 1;
  }
});
require( 'deasync' ).loopWhile(function(){return parts != chunks;})

// commit the multi part upload
parameters.body = partsToCommitBody;
oci.objectStore.obj.commitMultipartUpload( auth, parameters, function(){ console.log('success');} );

oci.database.autonomousDatabase.list( auth, parameters, function(data){console.log(data);})
parameters.domain = 'ocid1.tenancy.oc1..aaaaaaaahm47pxqwunxjqel6jhiuyodldss4z2tx4m24cfmyqys3zndfw3ta';
parameters.domain = 'myservices-cacct-f7686c0df763414cbe38fabede8869e6';
//parameters.id = 'cacct-f7686c0df763414cbe38fabede8869e6';
//parameters["X-ID-TENANT-NAME"] = 'idcs-42320e221b6e417fa1fa1a3341ebb6c0';
parameters.domain = 'oraclecloud987';
parameters.domain = '.anon';
parameters.domain = 'idcs-42320e221b6e417fa1fa1a3341ebb6c0';
auth.RESTversion = '/v1';

//oci.myServices.purchaseEntitlements.get( auth, parameters, function(data){console.log(data);})

//oci.objectStore.namespace.get( auth, parameters, function(data){console.log(data);})

var s = "https://<object_storage_namespace>.compat.objectstorage.us-phoenix-1.oraclecloud.com";
var r = "newServer";

//console.log( s.replace('<object_storage_namespace>',r));
*/