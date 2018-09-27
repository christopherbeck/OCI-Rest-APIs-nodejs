var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function createOrReset( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + 
                             '/users/' + encodeURIComponent(parameters.userId) +
                             '/uiPassword',
                       host : endpoint.service.iam[auth.region],
                       method : 'POST',
                       body : parameters.body,
                       'opc-retry-token' : parameters['opc-retry-token'] },
                      callback )
  };

  module.exports={
      createOrReset: createOrReset
  }