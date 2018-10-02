var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function attach( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + 
                              '/serviceGateways' + encodeURIComponent(parameters.serviceGatewayId) +
                              '/actions/attachService',
                       host : endpoint.service.core[auth.region],
                       method : 'POST',
                       body : parameters.body,
                       'opc-retry-token' : parameters['opc-retry-token'] },
                      callback )
  };

function detatch( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + 
                              '/serviceGateways' + encodeURIComponent(parameters.serviceGatewayId) +
                              '/actions/detatchService',
                       host : endpoint.service.core[auth.region],
                       method : 'POST',
                       body : parameters.body,
                       'opc-retry-token' : parameters['opc-retry-token'] },
                      callback )
  };

function create( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + '/serviceGateways',
                       host : endpoint.service.core[auth.region],
                       method : 'POST',
                       body : parameters.body,
                       'opc-retry-token' : parameters['opc-retry-token'] },
                      callback )
  };

function drop( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + 
                      '/serviceGateways/' + encodeURIComponent(parameters.serviceGatewayId),
                       host : endpoint.service.core[auth.region],
                       method : 'DELETE',
                       'if-match' : parameters['if-match'] },
                      callback )
  };

function get( auth, parameters, callback ) {
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                              '/serviceGateways/' + encodeURIComponent(parameters.serviceGatewayId),
                       host : endpoint.service.core[auth.region],
                       method : 'GET' }, 
                     callback );
  };

function list( auth, parameters, callback ) {
    var query = '';
    query = '?compartmentId=' + encodeURIComponent(parameters.compartmentId);
    if ( 'vncId' in parameters )
      query = query + '&vncId=' + encodeURIComponent(parameters.vncId);
    if ( 'page' in parameters )
      query = query + '&page=' + encodeURIComponent(parameters.page);
    if ( 'limit' in parameters )
      query = query + '&limit=' + encodeURIComponent(parameters.limit);
    if ( 'sortBy' in parameters )
      query = query + '&sortBy=' + encodeURIComponent(parameters.sortBy);
    if ( 'sortOrder' in parameters )
      query = query + '&sortOrder=' + encodeURIComponent(parameters.sortOrder);
    if ( 'lifecycleState' in parameters )
      query = query + '&lifecycleState=' + encodeURIComponent(parameters.lifecycleState);
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                      '/serviceGateways' + query,
                       host : endpoint.service.core[auth.region],
                       method : 'GET' }, 
                     callback );
  };

function update( auth, parameters, callback ) {
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                              '/serviceGateways/' + encodeURIComponent(parameters.serviceGatewayId),
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
      get: get,
      attach: attach,
      detatch: detatch
  }