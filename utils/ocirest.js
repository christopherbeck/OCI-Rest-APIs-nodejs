var https = require('https');
var httpSignature = require('http-signature');
var jsSHA = require('jssha');

function process( auth, options, callback) {

  // begin https request
  var request = https.request( options, handleResponse(callback));

  // process request body
  var body;
  if (options.headers['content-type'] == 'application/x-www-form-urlencoded' )
    body = options.body;
  else
    body = JSON.stringify( options.body );
  delete options.body;

  // sing the headers
  sign( auth, request, body );

  // send the body and process the response
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

    if ( request.getHeader('content-type') != 'application/x-www-form-urlencoded' ){
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


function buildHeaders( possibleHeaders, options, bString ){
  var headers = {};
  headers['content-type'] = bString ? 'application/x-www-form-urlencoded' : 'application/json';

  for( var i=0; i<possibleHeaders.length; i++ )
      if ( possibleHeaders[i].toLowerCase() in options )
        headers[possibleHeaders[i].toLowerCase()] = options[possibleHeaders[i]];
  return headers;
}

function buildQueryString( possibleQuery, options ){
  var query = '';
  for ( var i=0; i<possibleQuery.length; i++ )
    if ( possibleQuery[i] in options )
      query += (query=='' ? '?' : '&' ) + possibleQuery[i] + '=' + encodeURIComponent(options[possibleQuery[i]]);
  return query;
}

module.exports = {
  process: process,
  buildHeaders: buildHeaders,
  buildQueryString: buildQueryString
};
