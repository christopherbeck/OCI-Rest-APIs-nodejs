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
    var queryParameterExists = false;
    if( 'objectNamePrefix' in parameters ){
      query = query + (queryParameterExists?'&':'?') +
              'objectNamePrefix=' + encodeURIComponent(parameters.objectNamePrefix);
      queryParameterExists = true;
    }
    if( 'limit' in parameters ){
      query = query + (queryParameterExists?'&':'?') +
              'limit=' + encodeURIComponent(parameters.limit);
      queryParameterExists = true;
    }
    if( 'page' in parameters ){
      query = query + (queryParameterExists?'&':'?') +
              'page=' + encodeURIComponent(parameters.page);
      queryParameterExists = true;
    }
    console.log( 'query = ' + query );
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