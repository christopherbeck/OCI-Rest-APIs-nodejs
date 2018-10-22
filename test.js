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
//wait until async call finishes
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

//
//  Rename file in objectstore bucket
//

// add body element to parameters
parameters.body = { sourceName : 'abc.jpg', newName : 'xyz.jpg' };
oci.objectStore.obj.rename( auth, parameters, callback );


//
//  list all resource Types
//

// Need to change the REST version
auth.RESTversion = '/20180409';
oci.search.resourceType.list( auth, parameters, function(data){console.log(JSON.stringify(data[0]));}  );


//
//  List all available shapes
//
parameters = {
  compartmentId : 'ocid1.compartment.oc1..aaaaaaaapfevjgs2bylnodtw7oojzrvyonna2e4vkkddzbos4zyxhr7jizka'
};
auth.RESTversion = '/20160918';
oci.core.shape.list( auth, parameters, callback );


//
// Upload file to objectStore
//

// set up the parameter object
parameters = {
      objectName : '94927a.jpg',
      namespaceName: 'gse00014467',
      bucketName : 'chris_bucket'
    };

parameters.body = fs.readFileSync( '/Users/clbeck/Desktop/94927a.jpg');

oci.objectStore.obj.put( auth, parameters, callback );

//
//  List files in objectStore bucket
//

oci.objectStore.obj.list( auth, parameters, function(data){
  for(var i=0; i<data.objects.length; i++ )
    console.log( data.objects[i].name );
} );
