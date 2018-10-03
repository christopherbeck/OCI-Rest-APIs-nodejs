var os = require( 'os' );
var fs = require( 'fs' );

var oci = require( './oci' );

var auth={
    tenancyId : 'ocid1.tenancy.oc1..aaaaaaaahm47pxqwunxjqel6jhiuyodldss4z2tx4m24cfmyqys3zndfw3ta',
    userId : 'ocid1.user.oc1..aaaaaaaakb5c25jsxn3xx6jdi5gfoqmtlyb6rwfhqmreucv76ubnofnbspna',
    keyFingerprint : 'd0:77:11:66:7b:a8:90:c0:ef:c7:5c:79:9d:c6:f4:24',
    RESTversion : '/20160918',
    //RESTversion : '/20180115',
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
//oci.objectStore.bucket.list(auth, 'oraclecloud431', {compartmentId: compOCID }, function(data){console.log(data);} );
//oci.objectStore.bucket.get(auth, 'oraclecloud431', 'calvin_bucket', function(data){console.log(data);} );

//oci.objectStore.namespace.getMetadata( auth, 'oraclecloud431', function(data){console.log(data);} )

//oci.objectStore.obj.list( auth, { namespaceName: 'oraclecloud431', bucketName: 'calvin_bucket'}, function(data){console.log(data);})

compOCID = 'ocid1.tenancy.oc1..aaaaaaaa72nxc2if3h676gok2mo34fzstut6iztkdruls7hqwxdj6pysmmhq';
//oci.database.autonomousDatabase.list( auth, { compartmentId: compOCID}, function(data){console.log(data);} );

parameters = {
  namespaceName: 'oraclecloud431',
  bucketName: 'calvin_bucket',
  body : { sourceName: 'part1.csv', newName: "part1_new.csv" }
};

//oci.objectStore.obj.rename( auth, parameters, function(data){console.log(data);} );

parameters = {
    compartmentId : 'ocid1.tenancy.oc1..aaaaaaaahm47pxqwunxjqel6jhiuyodldss4z2tx4m24cfmyqys3zndfw3ta',
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
oci.database.autonomousDatabase.list( auth, parameters, function(data){console.log(data);} );
oci.iam.user.list( auth, parameters, function(data){console.log(data);} );
