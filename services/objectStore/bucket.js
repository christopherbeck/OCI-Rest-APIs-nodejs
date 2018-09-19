var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function create( auth, parameters, callback ){
  ocirest.process( auth,
                   { path : '/n/' +  encodeURIComponent(parameters.namespaceName) + 
                            '/b/',
                     host : endpoint.service.objectStore[auth.region],
                     method : 'POST',
                     'opc-client-response' : parameters['opc-client-response'],
                     body : options }, 
                   callback );
}

function update( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : '/n/' +  encodeURIComponent(parameters.namespaceName) + 
                            '/b/' + encodeURIComponent(parameters.bucketName) + '/',
                     host : endpoint.service.objectStore[auth.region],
                     method : 'POST',
                     'opc-client-request-id' : parameters['opc-client-request-id'],
                     'if-match' : parameters['if-match'],
                     body : options },
                   callback );
};

function get( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : '/n/' +  encodeURIComponent(parameters.namespaceName) + 
                            '/b/' + encodeURIComponent(parameters.bucketName) + '/',
                     host : endpoint.service.objectStore[auth.region],
                     'if-match' : parameters['if-match'],
                     'if-none-match' : parameters['if-none-match'],
                     'opc-client-request-id' : parameters['opc-client-request-id'],
                     method : 'GET' },
                    callback );
};

function head( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : '/n/' +  encodeURIComponent(parameters.namespaceName) + 
                            '/b/' + encodeURIComponent(parameters.bucketName) + '/',
                     host : endpoint.service.objectStore[auth.region],
                     'if-match' : parameters['if-match'],
                     'if-none-match' : parameters['if-none-match'],
                     'opc-client-request-id' : parameters['opc-client-request-id'],
                     method : 'HEAD' },
                    callback );
};

function drop( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : '/n/' +  encodeURIComponent(parameters.namespaceName) + 
                            '/b/' + encodeURIComponent(parameters.bucketName) + '/',
                     host : endpoint.service.objectStore[auth.region],
                     'if-match' : parameters['if-match'],
                     'opc-client-request-id' : parameters['opc-client-request-id'],
                     method : 'DELETE' },
                    callback );
};

function list( auth, parameters, callback ) {
  var query = '';
  if ( 'limit' in parameters )
    query = query + '&limit=' + encodeURIComponent( parameters.limit );

  if ( 'page' in parameters )
    query = query + '&page=' + encodeURIComponent( parameters.page );

  if ( 'fields' in parameters )
    query = query + '&fields=' + encodeURIComponent( parameters.fields );

  ocirest.process( auth,
                   { path : '/n/' +  encodeURIComponent(parameters.namespaceName) + 
                            '/b/' + '?compartmentId=' + encodeURIComponent(parameters.compartmentId) + 
                            query,
                     host : endpoint.service.objectStore[auth.region],
                     'opc-client-request-id' : parameters['opc-client-request-id'],
                     method : 'GET' },
                    callback );
};

module.exports = {
    list: list,
    update: update,
    get: get,
    create: create,
    head: head,
    drop: drop
    };
