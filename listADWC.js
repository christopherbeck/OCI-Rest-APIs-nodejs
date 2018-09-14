var headers = require('./headers.js');
var auth = require('./auth.js');
var regions = require('./regions.js');

var https = require('https');

//Create autonomous database ATP 


function getATP(compartmentId, callback) {

    var options = {
        host: regions.dbAshburnRegion,
        path: '/20160918/autonomousDatabases?'+'compartmentId='+ compartmentId,
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        }
    };

    var request = https.request(options, headers.handleRequest(callback));

    headers.sign(request, {
        privateKey: auth.privateKey,
        keyFingerprint: auth.keyFingerprint,
        tenancyId: auth.tenancyId,
        userId: auth.authUserId
    });

    request.end();
};


// test the above functions
console.log("GET USER:");

headers.getUser(auth.authUserId, function(data) {
    console.log(data);

   var compartment = auth.ChrisCompartment;

    console.log("\nListing Autonomous Databases:");

    // TODO: replace this with a compartment you have access to
    
    getATP(compartment,function(data) {
        
        console.log(data);
    });


   
});
