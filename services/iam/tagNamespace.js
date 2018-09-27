var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function create( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + '/tagNamespaces',
                       host : endpoint.service.iam[auth.region],
                       method : 'POST',
                       body : parameters.body,
                       'opc-retry-token' : parameters['opc-retry-token'] },
                      callback )
  };

function get( auth, parameters, callback ) {
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                             '/tagNamespaces/' + encodeURIComponent(parameters.tagNamespaceId),
                       host : endpoint.service.iam[auth.region],
                       method : 'GET' }, 
                     callback );
  };

function update( auth, parameters, callback ) {
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                             '/tagNamespaces/' + encodeURIComponent(parameters.tagNamespaceId),
                       host : endpoint.service.iam[auth.region],
                       'if-match' : parameters['if-match'],
                       body : parameters.body,
                       method : 'PUT' }, 
                     callback );
  };
  
  module.exports={
      update: update,
      create: create,
      get: get
  }