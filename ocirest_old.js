var https = require('https');
var httpSignature = require('http-signature');
var jsSHA = require('jssha');

function process( auth, options, callback) {
  // begin https request
  var request = https.request( options, handleResponse(callback));
/*
  // set headers
  for ( var i=0; i<options.headers; i++ )
    request.setHeader( opti)
  request.setHeader( 'Content-Type', 'application/json' );
  if (options.uploadFile )
    request.setHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
  if ( options['opc-request-id'] !== undefined )
    request.setHeader( 'opc-request-token', options['opc-request-token'] );
  if ( options['opc-client-request-id'] !== undefined )
    request.setHeader( 'opc-client-request-token', options['opc-client-request-token'] );
  if ( options['opc-retry-token'] !== undefined )
    request.setHeader( 'opc-retry-token', options['opc-retry-token'] );
  if ( options['if-match'] !== undefined )
    request.setHeader( 'if-match', options['if-match'] );
  if ( options['If-Match'] !== undefined )
    request.setHeader( 'If-Match', options['If-Match'] );
  if ( options['If-Unmodified-Since'] !== undefined )
    request.setHeader( 'If-Unmodified-Since', options['If-Unmodified-Since'] );
  if ( options['if-none-match'] !== undefined )
    request.setHeader( 'if-none-match', options['if-none-match'] );
  if ( options.range !== undefined )
    request.setHeader( 'range', options.range );

    */

  // sign/authorize the https request for REST call
  if (options.headers['content-type'] == 'x-www-form-urlencoded' )
    var body = options.body;
  else
    var body = JSON.stringify( options.body );
  sign( auth, request, body, options.uploadFile );
  request.end(body);
}

function sign( auth, request, body ) {
  var headersToSign = [ "host",  "date",  "(request-target)" ];

  // methodsThatRequireExtraHeaders ["POST", "PUT"];
  if(["POST","PUT"].indexOf(request.method.toUpperCase()) !== -1 ) 
  {
    body = body || ""; 
    request.setHeader("content-length", body.length);
    headersToSign = headersToSign.concat([ "content-type", "content-length" ]);

    if ( request.headers['content-type'] == 'x-www-form-urlencoded' ){
      var shaObj = new jsSHA("SHA-256", "TEXT");
      shaObj.update(body);
      request.setHeader("x-content-sha256", shaObj.getHash('B64'));
      headersToSign = headersToSign.concat([ "x-content-sha256" ]);
    }
  }

  httpSignature.sign( request, { key: auth.privateKey,
                                 keyId: auth.tenancyId + "/" + 
                                        auth.userId + "/" + 
                                        auth.keyFingerprint,
                                 headers: headersToSign } );

  var newAuthHeaderValue = request.getHeader("Authorization").replace("Signature ", "Signature version=\"1\",");
  request.setHeader("Authorization", newAuthHeaderValue);
};

// generates a function to handle the https.request response object
function handleResponse( callback ) {
  return function(response) {
    var responseBody = "";
    response.on('data', function(chunk) { responseBody += chunk; });
    response.on('end', function() { if (responseBody!="")
                                      callback(JSON.parse(responseBody));
                                    else
                                      callback(response.headers /*responseBody*/);
                                  });
  }
};

module.exports = {
  process: process
};
