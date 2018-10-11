var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function create( auth, parameters, callback ){
    ocirest.process( auth,
                     { path : '/n/' + encodeURIComponent(parameters.namespaceName) + 
                              '/b/' + encodeURIComponent(parameters.bucketName) +
                              '/p/',
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
                              '/p/' + encodeURIComponent(parameters.parId),
                       host : endpoint.service.objectStore[auth.region],
                       'opc-client-request-id' : parameters['opc-client-request-id'],
                       method : 'DELETE' },
                     callback );
  }

function get( auth, parameters, callback ){
    ocirest.process( auth,
                     { path : '/n/' + encodeURIComponent(parameters.namespaceName) + 
                              '/b/' + encodeURIComponent(parameters.bucketName) +
                              '/p/' + encodeURIComponent(parameters.parId),
                       host : endpoint.service.objectStore[auth.region],
                       'opc-client-request-id' : parameters['opc-client-request-id'],
                       method : 'GET' },
                     callback );
  }

function list( auth, parameters, callback ){
    var query = '';
    if( 'objectNamePrefix' in parameters )
      query = '?objectNamePrefix=' + encodeURIComponent(parameters.objectNamePrefix);
    if( 'limit' in parameters )
      query += (query==''?'&':'?') + 'limit=' + encodeURIComponent(parameters.limit);
    if( 'page' in parameters )
      query += (query==''?'&':'?') + 'page=' + encodeURIComponent(parameters.page);
      
    ocirest.process( auth,
                     { path : '/n/' + encodeURIComponent(parameters.namespaceName) + 
                              '/b/' + encodeURIComponent(parameters.bucketName) +
                              '/p/' + query,
                       host : endpoint.service.objectStore[auth.region],
                       'opc-client-request-id' : parameters['opc-client-request-id'],
                       method : 'GET' },
                     callback );
  }

module.exports = {
  create : create,
  drop : drop,
  get : get,
  list : list
}