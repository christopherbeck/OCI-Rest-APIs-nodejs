var ocirest = require('../../utils/ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function create( auth, parameters, callback ) {
    var possibleHeaders = ['opc-retry-token'];
    var headers = ocirest.buildHeaders( possibleHeaders, parameters );
    ocirest.process( auth,
                     { path : auth.RESTversion + 
                             '/tagNamespaces/' + encodeURIComponent(parameters.tagNamespaceId) +
                             '/tags',
                       host : endpoint.service.iam[auth.region],
                       method : 'POST',
                       body : parameters.body,
                       headers : headers },
                      callback )
  };

function get( auth, parameters, callback ) {
    var possibleHeaders = [];
    var headers = ocirest.buildHeaders( possibleHeaders, parameters );
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                             '/tagNamespaces/' + encodeURIComponent(parameters.tagNamespaceId) +
                             '/tags/' + encodeURIComponent(parameters.tagName),
                       host : endpoint.service.iam[auth.region],
                       headers : headers,
                       method : 'GET' }, 
                     callback );
  };

function update( auth, parameters, callback ) {
    var possibleHeaders = [];
    var headers = ocirest.buildHeaders( possibleHeaders, parameters );
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                             '/tagNamespaces/' + encodeURIComponent(parameters.tagNamespaceId) +
                             '/tags/' + encodeURIComponent(parameters.tagName),
                       host : endpoint.service.iam[auth.region],
                       body : parameters.body,
                       headers : headers,
                       method : 'PUT' }, 
                     callback );
  };
  
  module.exports={
      update: update,
      create: create,
      get: get
  }