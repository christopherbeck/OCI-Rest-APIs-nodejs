var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function create( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + '/instanceConsoleConnections',
                       host : endpoint.service.core[auth.region],
                       method : 'POST',
                       body : parameters.body,
                       'opc-retry-token' : parameters['opc-retry-token'] },
                      callback )
  };

function drop( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + 
                      '/instanceConsoleConnections/' + encodeURIComponent(parameters.instanceConsoleConnectionId),
                       host : endpoint.service.core[auth.region],
                       method : 'DELETE',
                       'if-match' : parameters['if-match'] },
                      callback )
  };

function get( auth, parameters, callback ) {
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                              '/instanceConsoleConnections/' + encodeURIComponent(parameters.instanceConsoleConnectionId),
                       host : endpoint.service.core[auth.region],
                       method : 'GET' }, 
                     callback );
  };

function list( auth, parameters, callback ) {
    var query = '';
    query = '?compartmentId=' + encodeURIComponent(parameters.compartmentId);
    if ( 'instanceId' in parameters )
      query = query + '&instanceId=' + encodeURIComponent(parameters.instanceId);
    if ( 'page' in parameters )
      query = query + '&page=' + encodeURIComponent(parameters.page);
    if ( 'limit' in parameters )
      query = query + '&limit=' + encodeURIComponent(parameters.limit);
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                      '/instanceConsoleConnections' + query,
                       host : endpoint.service.core[auth.region],
                       method : 'GET' }, 
                     callback );
  };

  module.exports={
      list: list,
      drop: drop,
      create: create,
      get: get
  }