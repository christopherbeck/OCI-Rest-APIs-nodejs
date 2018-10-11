var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function encrypt( auth, parameters, callback ){
    ocirest.process( auth,
                     { path : auth.RESTVersion + '/encrypt',
                       host : endpoint.service.kms[auth.region],
                       body : parameters.body,
                       'opc-request-id' :  parameters['opc-request-id'],
                       method : 'POST' },
                     callback );
  }

module.exports = {
  encrypt : encrypt
}