var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function decrypt( auth, parameters, callback ){
    ocirest.process( auth,
                     { path : auth.RESTVersion + '/decrypt',
                       host : endpoint.service.kms[auth.region],
                       body : parameters.body,
                       'opc-request-id' :  parameters['opc-request-id'],
                       method : 'POST' },
                     callback );
  }

module.exports = {
  decrypt : decrypt
}