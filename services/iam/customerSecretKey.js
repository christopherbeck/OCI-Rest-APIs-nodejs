var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function create( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + 
                       '/users/' + encodeURIComponent(parameters.userId) +
                       '/customerSecretKeys/',
                       host : endpoint.service.iam[auth.region],
                       method : 'POST',
                       body : parameters.body,
                       'opc-retry-token' : parameters['opc-retry-token'] },
                      callback )
  };

function drop( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + 
                       '/users/' + encodeURIComponent(parameters.userId) +
                       '/customerSecretKeys/' + encodeURIComponent(parameters.customerSecretKeyId),
                       host : endpoint.service.iam[auth.region],
                       'if-match' : parameters['if-match'],
                       method : 'DELETE' },
                      callback )
  };

  module.exports={
      create: create,
      drop: drop
  }