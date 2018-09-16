var auth = require('./auth.js');
var regions = require('./regions.js');
var https = require('https');
var httpSignature = require('http-signature');
var jsSHA = require("jssha");

var sign = function(request, options) {

  var apiKeyId = auth.tenancyId + "/" + 
                 auth.userId + "/" + 
                 auth.keyFingerprint;

  var headersToSign = [
        "host",
        "date",
        "(request-target)" ];

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
    key: auth.privateKey,
    keyId: apiKeyId,
    headers: headersToSign
  });

  var newAuthHeaderValue = request.getHeader("Authorization").replace("Signature ", "Signature version=\"1\",");
  request.setHeader("Authorization", newAuthHeaderValue);
};

// generates a function to handle the https.request response object
var handleResponse = function(callback) {

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

module.exports = {
sign: sign,
handleResponse: handleResponse
};
