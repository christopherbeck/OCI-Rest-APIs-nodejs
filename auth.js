var fs = require('fs');
var os = require('os');


/* Begin ---- Tenant auth info */

var tenancyId=  "ocid1.tenancy.oc1..aaaaaaaa72nxc2if3h676gok2mo34fzstut6iztkdruls7hqwxdj6pysmmhq";
var authUserId= "ocid1.user.oc1..aaaaaaaauhde6lmbsx6zayli4uddqswbhjynjoab2lxnt5rtsc6wk7q3izja";
var keyFingerprint = "d0:77:11:66:7b:a8:90:c0:ef:c7:5c:79:9d:c6:f4:24";
var compartment = "ocid1.tenancy.oc1..aaaaaaaa72nxc2if3h676gok2mo34fzstut6iztkdruls7hqwxdj6pysmmhq";
var privateKeyPath = "/Users/clbeck/.oci/oci_api_key.pem";
var RESTversion = '/20160918';



if(privateKeyPath.indexOf("~/") === 0) {
    privateKeyPath = privateKeyPath.replace("~", os.homedir())
}
var privateKey = fs.readFileSync(privateKeyPath, 'ascii');

/* End ---- Tenant auth info */

module.exports = {
tenancyId: tenancyId,
authUserId: authUserId,
keyFingerprint: keyFingerprint,
privateKey: privateKey,
compartment: compartment,
RESTversion: RESTversion
};
