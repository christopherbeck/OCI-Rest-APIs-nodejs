var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function put( auth, parameters, callback ){
  ocirest.process( auth,
                   { path : '/n/' +  encodeURIComponent(parameters.namespaceName) + 
                            '/b/' + encodeURIComponent(parameters.bucketName) + 
                            '/l',
                     host : endpoint.service.objectStore[auth.region],
                     method : 'PUT',
                     'opc-client-response' : parameters['opc-client-response'],
                     'if-match' : parameters['if-match'],
                     'if-none-match' : parameters['if-none-match'],
                     body : parameters.body }, 
                   callback );
}

function get( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : '/n/' +  encodeURIComponent(parameters.namespaceName) + 
                            '/b/' + encodeURIComponent(parameters.bucketName) + 
                            '/l',
                     host : endpoint.service.objectStore[auth.region],
                     'opc-client-request-id' : parameters['opc-client-request-id'],
                     method : 'GET' },
                    callback );
};

function drop( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : '/n/' +  encodeURIComponent(parameters.namespaceName) + 
                            '/b/' + encodeURIComponent(parameters.bucketName) + 
                            '/l',
                     host : endpoint.service.objectStore[auth.region],
                     'if-match' : parameters['if-match'],
                     'opc-client-request-id' : parameters['opc-client-request-id'],
                     method : 'DELETE' },
                    callback );
};

module.exports = {
    get: get,
    put: put,
    drop: drop
    };
