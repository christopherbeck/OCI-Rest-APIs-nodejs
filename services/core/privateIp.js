var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function create( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + '/privateIps',
                       host : endpoint.service.core[auth.region],
                       method : 'POST',
                       body : parameters.body,
                       'opc-retry-token' : parameters['opc-retry-token'] },
                      callback )
  };

function drop( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + 
                      '/privateIps/' + encodeURIComponent(parameters.privateIpId),
                       host : endpoint.service.core[auth.region],
                       method : 'DELETE',
                       'if-match' : parameters['if-match'] },
                      callback )
  };

function get( auth, parameters, callback ) {
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                              '/privateIps/' + encodeURIComponent(parameters.privateIpId),
                       host : endpoint.service.core[auth.region],
                       method : 'GET' }, 
                     callback );
  };

function list( auth, parameters, callback ) {
    var query = '';
    if ( 'page' in parameters )
      query = query + (query==''?'?':'&') + 'page=' + encodeURIComponent(parameters.page);
    if ( 'limit' in parameters )
      query = query + (query==''?'?':'&') + 'limit=' + encodeURIComponent(parameters.limit);
    if ( 'ipAddress' in parameters )
      query = query + (query==''?'?':'&') + 'ipAddress=' + encodeURIComponent(parameters.ipAddress);
    if ( 'subnetId' in parameters )
      query = query + (query==''?'?':'&') + 'subnetId=' + encodeURIComponent(parameters.subnetId);
    if ( 'vnicId' in parameters )
      query = query + (query==''?'?':'&') + 'vnicId=' + encodeURIComponent(parameters.vnicId);
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                      '/privateIps' + query,
                       host : endpoint.service.core[auth.region],
                       method : 'GET' }, 
                     callback );
  };

function update( auth, parameters, callback ) {
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                              '/privateIps/' + encodeURIComponent(parameters.privateIpId),
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
      get: get
  }