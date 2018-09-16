var autonomousDatabases = require('./autonomousDatabases.js');
var auth = require('./auth.js');
var httpSignature = require("http-signature");

/*
autonomousDatabases.list(
    auth.compartment,
    function(data){ console.log(data); }
);
*/
/*
autonomousDatabases.start( 
  'ocid1.autonomousdatabase.oc1.iad.abuwcljskistzoklbyg2wkmparvlfblisrdc6sjhcltqcqvfs777o4uutjcq',
  function(data) {console.log(data);})
*/

var options = {};
options.dbOCID = 'ocid1.autonomousdatabase.oc1.iad.abuwcljskistzoklbyg2wkmparvlfblisrdc6sjhcltqcqvfs777o4uutjcq';
options.displayName = 'newNewAmy';
autonomousDatabases.update( options, function(data) {console.log(data);})

/*
console.log( httpSignature.sshKeyFingerprint( 
    httpSignature.pemToRsaSSHKey( auth.privateKey)));

console.log( auth.keyFingerprint);
*/