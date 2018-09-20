# OCI-Rest-APIs-nodejs


Oracle Cloud Infrastructure REST APIs implemented in node.js, with current support for Database and limited Object Storage.  More will be added.

Most commands take the form of oci.<service>.<resourceType>.<action>

For example, to list autonomous datawarehouses:

oci.databases.autonomousDataWarehouses( auth, parameters, callback );

auth:
  JSON object containing the following:
  auth={
    tenancyId :
    userId :
    keyFingerprint : 
    RESTversion : '/20160918',
    region : 'us-ashburn-1',
    privateKey : 
  };

parameters:
  JSON object cantaining any of the parameters for the REST call.  For a descrioption of the parameters see here:  https://docs.cloud.oracle.com/iaas/api/#/

  eg.  a parameter object to change the freeForm tags of autonomousDatabase might look like
  var parameters = {
    autonomousDatabaseId : <DB OCID>
    body : { "freeformTags" : {"tag 1": 123456, 
                               "tag 2": "yyy", 
                               "tag 3": "aaa" },
    };

callback:
  Node.js standard callback function.
