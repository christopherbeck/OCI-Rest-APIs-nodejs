var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function create( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + '/publicIps',
                       host : endpoint.service.core[auth.region],
                       method : 'POST',
                       body : parameters.body,
                       'opc-retry-token' : parameters['opc-retry-token'] },
                      callback )
  };

function drop( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + 
                      '/publicIps/' + encodeURIComponent(parameters.publicIpId),
                       host : endpoint.service.core[auth.region],
                       method : 'DELETE',
                       'if-match' : parameters['if-match'] },
                      callback )
  };

function get( auth, parameters, callback ) {
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                              '/publicIps/' + encodeURIComponent(parameters.publicIpId),
                       host : endpoint.service.core[auth.region],
                       method : 'GET' }, 
                     callback );
  };

function getByIpAddress( auth, parameters, callback ) {
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                              '/publicIps/actions/getByIpAddress',
                       host : endpoint.service.core[auth.region],
                       method : 'GET' }, 
                     callback );
  };

function getByPrivateIpId( auth, parameters, callback ) {
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                              '/publicIps/actions/getByPrivateIpId',
                       host : endpoint.service.core[auth.region],
                       method : 'GET' }, 
                     callback );
  };

function list( auth, parameters, callback ) {
    var query = '';
    query = query + '?compartmentId=' + encodeURIComponent(parameters.compartmentId);
    query = query + '&scope=' + encodeURIComponent(parameters.scopeId);
    if ( 'page' in parameters )
      query = query + '&page=' + encodeURIComponent(parameters.page);
    if ( 'limit' in parameters )
      query = query + '&limit=' + encodeURIComponent(parameters.limit);
    if ( 'availabilityDomain' in parameters )
      query = query + '&availabilityDomain=' + encodeURIComponent(parameters.availabilityDomain);
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                      '/publicIps' + query,
                       host : endpoint.service.core[auth.region],
                       method : 'GET' }, 
                     callback );
  };

function update( auth, parameters, callback ) {
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                              '/publicIps/' + encodeURIComponent(parameters.publicIpId),
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
      getByIpAddress: getByIpAddress,
      getByPrivateIpId: getByPrivateIpId,
      get: get
  }