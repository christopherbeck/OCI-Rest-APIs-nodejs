var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function create( auth, parameters, callback ){
  ocirest.process( auth,
                   { path : auth.RESTversion + '/keys' + encodeURIComponent(parameters.keyId) +
                            '/keyVersions',
                     host : endpoint.service.kms[auth.region],
                     method : 'POST',
                     'opc-request-id' : parameters['opc-request-id'],
                     'opc-retry-token' : parameters['opc-retry-token'],
                     body : parameters.body }, 
                   callback );
}

function get( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/keys' + encodeURIComponent(parameters.keyId) +
                            '/keyVersions' + encodeURIComponent(parameters.keyVersionId),
                     host : endpoint.service.kms[auth.region],
                     'opc-request-id' : parameters['opc-request-id'],
                     method : 'GET' },
                    callback );
};

module.exports = {
    get: get,
    create: create
    };
