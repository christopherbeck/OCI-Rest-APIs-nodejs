var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function connect( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + 
                              '/remotePeeringConnections' + encodeURIComponent(parameters.remotePeeringConnectionId) +
                              '/actions/connect',
                       host : endpoint.service.core[auth.region],
                       method : 'POST',
                       body : parameters.body },
                      callback )
  };

function create( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + '/remotePeeringConnections',
                       host : endpoint.service.core[auth.region],
                       method : 'POST',
                       body : parameters.body,
                       'opc-retry-token' : parameters['opc-retry-token'] },
                      callback )
  };

function drop( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + 
                      '/remotePeeringConnections/' + encodeURIComponent(parameters.remotePeeringConnectionId),
                       host : endpoint.service.core[auth.region],
                       method : 'DELETE',
                       'if-match' : parameters['if-match'] },
                      callback )
  };

function get( auth, parameters, callback ) {
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                              '/remotePeeringConnections/' + encodeURIComponent(parameters.remotePeeringConnectionId),
                       host : endpoint.service.core[auth.region],
                       method : 'GET' }, 
                     callback );
  };

function list( auth, parameters, callback ) {
    var query = '';
    query = '?compartmentId=' + encodeURIComponent(parameters.compartmentId);
    query = '&vncId=' + encodeURIComponent(parameters.vncId);
    if ( 'page' in parameters )
      query = query + '&page=' + encodeURIComponent(parameters.page);
    if ( 'limit' in parameters )
      query = query + '&limit=' + encodeURIComponent(parameters.limit);
    if ( 'drgId' in parameters )
      query = query + '&drgId=' + encodeURIComponent(parameters.drgId);
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                      '/remotePeeringConnections' + query,
                       host : endpoint.service.core[auth.region],
                       method : 'GET' }, 
                     callback );
  };

function update( auth, parameters, callback ) {
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                              '/remotePeeringConnections/' + encodeURIComponent(parameters.remotePeeringConnectionId),
                       host : endpoint.service.core[auth.region],
                       'if-match' : parameters['if-match'],
                       body : parameters.body,
                       method : 'PUT' }, 
                     callback );
  };
  
  module.exports={
      list: list,
      drop: drop,
      update: update,
      create: create,
      connect: connect,
      get: get
  }