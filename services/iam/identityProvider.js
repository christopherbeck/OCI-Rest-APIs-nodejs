var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function create( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + '/identityProviders/',
                       host : endpoint.service.iam[auth.region],
                       method : 'POST',
                       body : parameters.body,
                       'opc-retry-token' : parameters['opc-retry-token'] },
                      callback )
  };

function drop( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + 
                              '/identityProviders/' + encodeURIComponent(parameters.identityProviderId),
                       host : endpoint.service.iam[auth.region],
                       method : 'DELETE',
                       'if-match' : parameters['if-match'] },
                      callback )
  };

function get( auth, parameters, callback ) {
    ocirest.process( auth, 
                     { path : auth.RESTversion + '/identityProviders/' + encodeURIComponent(parameters.identityProviderId),
                       host : endpoint.service.iam[auth.region],
                       method : 'GET' }, 
                     callback );
  };

function list( auth, parameters, callback ) {
    var query = '';
    query = '?compartmentId=' + encodeURIComponent(parameters.compartmentId);
    query = query + 'protocol=' + encodeURIComponent(parameters.protocol);
    if ( 'page' in parameters )
      query = query + '&page=' + encodeURIComponent(parameters.page);
    if ( 'limit' in parameters )
      query = query + '&limit=' + encodeURIComponent(parameters.limit);
    ocirest.process( auth, 
                     { path : auth.RESTversion + '/identityProviders/',
                       host : endpoint.service.iam[auth.region],
                       method : 'GET' }, 
                     callback );
  };

function update( auth, parameters, callback ) {
    ocirest.process( auth, 
                     { path : auth.RESTversion + '/identityProviders/' + encodeURIComponent(parameters.identityProviderId),
                       host : endpoint.service.iam[auth.region],
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