var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function list( auth, parameters, callback ){
  var query = '';
  if ( 'prefix' in parameters )
    query = query + '&prefix=' + encodeURIComponent(parameters.prefix);
  if ( 'start' in parameters )
    query = query + '&start=' + encodeURIComponent(parameters.start);
  if ( 'end' in parameters )
    query = query + '&end=' + encodeURIComponent(parameters.end);
  if ( 'limit' in parameters )
    query = query + '&limit=' + encodeURIComponent(parameters.limit);
  if ( 'delimiter' in parameters )
    query = query + '&delimiter=' + encodeURIComponent(parameters.delimiter);
  if ( 'fields' in parameters )
    query = query + '&fields=' + encodeURIComponent(parameters.fields);

  ocirest.process( auth,
                   { path : '/n/' + encodeURIComponent(parameters.namespaceName) + 
                            '/b/' + encodeURIComponent(parameters.bucketName) + 
                            '/o' +
                            query,
                     host : endpoint.service.objectStore[auth.region],
                     'opc-client-request-id' : parameters['opc-client-request-id'],
                     method : 'GET' },
                   callback );
}

function get( auth, parameters, callback ){
  ocirest.process( auth,
                   { path : '/n/' + encodeURIComponent(parameters.namespaceName) + 
                            '/b/' + encodeURIComponent(parameters.bucketName) +
                            '/o/' + encodeURIComponent(parameters.objectName),
                     host : endpoint.service.objectStore[auth.region],
                     'opc-client-request-id' : parameters['opc-client-request-id'],
                     'if-match' : parameters['if-match'],
                     'if-none-match' : parameters['if-none-match'],
                     range : parameters.range,
                     method : 'GET' },
                   callback );
}

function head( auth, parameters, callback ){
  ocirest.process( auth,
                   { path : '/n/' + encodeURIComponent(parameters.namespaceName) + 
                            '/b/' + encodeURIComponent(parameters.bucketName) +
                            '/o/' + encodeURIComponent(parameters.objectName),
                     host : endpoint.service.objectStore[auth.region],
                     'opc-client-request-id' : parameters['opc-client-request-id'],
                     'if-match' : parameters['if-match'],
                     'if-none-match' : parameters['if-none-match'],
                     method : 'HEAD' },
                   callback );
}

function rename( auth, parameters, callback ){
  ocirest.process( auth,
                   { path : '/n/' + encodeURIComponent(parameters.namespaceName) + 
                            '/b/' + encodeURIComponent(parameters.bucketName) + 
                            '/actions/renameObject',
                     host : endpoint.service.objectStore[auth.region],
                     'opc-client-request-id' : parameters['opc-client-request-id'],
                     method : 'POST',
                     body : parameters.body },
                   callback );
}

function restore( auth, parameters, callback ){
  ocirest.process( auth,
                   { path : '/n/' + encodeURIComponent(parameters.namespaceName) + 
                            '/b/' + encodeURIComponent(parameters.bucketName) + 
                            '/actions/restoreObjects',
                     host : endpoint.service.objectStore[auth.region],
                     'opc-client-request-id' : parameters['opc-client-request-id'],
                     method : 'POST',
                     body : parameters.body },
                   callback );
}


function drop( auth, parameters, callback ){
  ocirest.process( auth,
                   { path : '/n/' + encodeURIComponent(parameters.namespaceName) + 
                            '/b/' + encodeURIComponent(parameters.bucketName) + 
                            '/o/' + encodeURIComponent(parameters.objectName),
                     host : endpoint.service.objectStore[auth.region],
                     'opc-client-request-id' : parameters['opc-client-request-id'],
                     'if-match' : parameters['if-match'],
                     method : 'DELETE' },
                   callback );
}




module.exports = {
    list: list,
    get: get,
    head: head,
    rename: rename,
    restore: restore,
    drop: drop
}