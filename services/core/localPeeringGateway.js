var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function connect( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + 
                              '/localPeeringGateways/' + encodeURIComponent(parameters.localPeeringGatewayId),
                       host : endpoint.service.core[auth.region],
                       method : 'POST',
                       body : parameters.body,
                       'opc-retry-token' : parameters['opc-retry-token'] },
                      callback )
  };

function create( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + '/localPeeringGateways',
                       host : endpoint.service.core[auth.region],
                       method : 'POST',
                       body : parameters.body,
                       'opc-retry-token' : parameters['opc-retry-token'] },
                      callback )
  };

function drop( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + 
                      '/localPeeringGateways/' + encodeURIComponent(parameters.localPeeringGatewayId),
                       host : endpoint.service.core[auth.region],
                       method : 'DELETE',
                       'if-match' : parameters['if-match'] },
                      callback )
  };

function get( auth, parameters, callback ) {
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                              '/localPeeringGateways/' + encodeURIComponent(parameters.localPeeringGatewayId),
                       host : endpoint.service.core[auth.region],
                       method : 'GET' }, 
                     callback );
  };

function list( auth, parameters, callback ) {
    var query = '';
    query = '?compartmentId=' + encodeURIComponent(parameters.compartmentId);
    query = '&vncId=' + encodeURIComponent(parameters.vncId);
    if ( 'cpeId' in parameters )
      query = query + '&cpeId=' + encodeURIComponent(parameters.cpeId);
    if ( 'page' in parameters )
      query = query + '&page=' + encodeURIComponent(parameters.page);
    if ( 'limit' in parameters )
      query = query + '&limit=' + encodeURIComponent(parameters.limit);
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                      '/localPeeringGateways' + query,
                       host : endpoint.service.core[auth.region],
                       method : 'GET' }, 
                     callback );
  };

function update( auth, parameters, callback ) {
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                              '/localPeeringGateways/' + encodeURIComponent(parameters.localPeeringGatewayId),
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