var fs = require( 'fs' );
var oci = require( './oci' );

var auth={
    tenancyId : 'ocid1.tenancy.oc1..aaaaaaaahm47pxqwunxjqel6jhiuyodldss4z2tx4m24cfmyqys3zndfw3ta',
    userId : 'ocid1.user.oc1..aaaaaaaakb5c25jsxn3xx6jdi5gfoqmtlyb6rwfhqmreucv76ubnofnbspna',
    keyFingerprint : 'd0:77:11:66:7b:a8:90:c0:ef:c7:5c:79:9d:c6:f4:24',
    RESTversion : '/20160918',
    //RESTversion : '/20180115',
    //RESTversion: '/20171215',
    region: 'us-ashburn-1',
    privateKeyPath: '/Users/clbeck/.oci/oci_api_key.pem'
};
auth.privateKey = fs.readFileSync(auth.privateKeyPath, 'ascii');

//var compartmentId = 'ocid1.tenancy.oc1..aaaaaaaa72nxc2if3h676gok2mo34fzstut6iztkdruls7hqwxdj6pysmmhq';
//var AWDOCID = 'ocid1.autonomousdwdatabase.oc1.iad.abuwcljtbqogthz3o4zffd7tcddcfgl4edoi5ro2chquqk7ufslbgiwsywjq';

//oci.database.autonomousDatabase.list( auth, { compartmentId : compartmentId}, function(data){console.log(data[0].dbName);});
//oci.database.autonomousDataWarehouse.list( auth, { compartmentId: compartmentId }, function(data){console.log(data[0].dbName);});

var ATPOCID = 'ocid1.autonomousdatabase.oc1.iad.abuwcljskistzoklbyg2wkmparvlfblisrdc6sjhcltqcqvfs777o4uutjcq';
var tags = { "freeformTags" : {"chris": 123456, "xxx": "yyy", "zzz": "aaa" }};
var parameters = {
    body : tags,
    autonomousDatabaseId : ATPOCID
}
//oci.database.autonomousDatabase.update( auth, parameters, function(data){console.log(data);} );
//oci.database.autonomousDatabaseBackup.list( auth, {"compartmentId": compOCID }, function(data){console.log(data);} );
//`oci.objectStore.bucket.list(auth, 'oraclecloud431', {compartmentId: compOCID }, function(data){console.log(data);} );
//oci.objectStore.bucket.get(auth, 'oraclecloud431', 'calvin_bucket', function(data){console.log(data);} );

//oci.objectStore.namespace.getMetadata( auth, 'oraclecloud431', function(data){console.log(data);} )

//oci.objectStore.obj.list( auth, { namespaceName: 'oraclecloud431', bucketName: 'calvin_bucket'}, function(data){console.log(data);})

compOCID = 'ocid1.tenancy.oc1..aaaaaaaa72nxc2if3h676gok2mo34fzstut6iztkdruls7hqwxdj6pysmmhq';
//oci.database.autonomousDatabase.list( auth, { compartmentId: compOCID}, function(data){console.log(data);} );

parameters = {
  namespaceName: 'oraclecloud987',
  bucketName: 'pebbles',
  body : { sourceName: 'tejis.jpg', newName: "tejus.jpg" },
  compartmentId : '',
  dbSystemShape : 'VM.Standard1.1'
};

//oci.objectStore.obj.rename( auth, parameters, function(data){console.log(data);} );

//oci.database.dbVersionSummary.list( auth, parameters, function(data){console.log(data);}  );

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
