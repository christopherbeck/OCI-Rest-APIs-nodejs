var auth = require('./auth.js');
var regions = require('./regions.js');

var https = require('https');
var httpSignature = require('http-signature');
var jsSHA = require("jssha");

var tenancyId = auth.tenancyId;
var userId = auth.userId;
var keyFingerprint = auth.keyFingerprint;
var privateKey = auth.privateKey;

 var sign = function(request, options) {

    var apiKeyId = options.tenancyId + "/" + options.userId + "/" + options.keyFingerprint;

    var headersToSign = [
        "host",
        "date",
        "(request-target)"
    ];

    var methodsThatRequireExtraHeaders = ["POST", "PUT"];

    if(methodsThatRequireExtraHeaders.indexOf(request.method.toUpperCase()) !== -1) {
        options.body = options.body || "";

        var shaObj = new jsSHA("SHA-256", "TEXT");
        shaObj.update(options.body);

        request.setHeader("Content-Length", options.body.length);
        request.setHeader("x-content-sha256", shaObj.getHash('B64'));

        headersToSign = headersToSign.concat([
            "content-type",
            "content-length",
            "x-content-sha256"
        ]);
    }

    httpSignature.sign(request, {
        key: privateKey,
        keyId: apiKeyId,
        headers: headersToSign
    });

    var newAuthHeaderValue = request.getHeader("Authorization").replace("Signature ", "Signature version=\"1\",");
    request.setHeader("Authorization", newAuthHeaderValue);
};

// generates a function to handle the https.request response object
var handleRequest = function(callback) {

    return function(response) {
        var responseBody = "";

        response.on('data', function(chunk) {
            responseBody += chunk;
        });

        response.on('end', function() {
            callback(JSON.parse(responseBody));
        });
    }
};

// gets the OCI user with the specified id
var getUser = function(userId, callback) {

    var options = {
        host: regions.iamAshburnRegion,
        path: "/20160918/users/" + encodeURIComponent(userId),
    };

    var request = https.request(options, handleRequest(callback));

    sign(request, {
        privateKey: privateKey,
        keyFingerprint: keyFingerprint,
        tenancyId: tenancyId,
        userId: userId
    });

    request.end();
};

module.exports = {
sign: sign,
handleRequest: handleRequest,
getUser: getUser

};
