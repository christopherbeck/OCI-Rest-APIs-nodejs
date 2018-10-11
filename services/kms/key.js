var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function create( auth, parameters, callback ){
  ocirest.process( auth,
                   { path : auth.RESTversion + '/keys',
                     host : endpoint.service.kms[auth.region],
                     method : 'POST',
                     'opc-request-id' : parameters['opc-request-id'],
                     'opc-retry-token' : parameters['opc-retry-token'],
                     body : parameters.body }, 
                   callback );
}

function update( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/keys/' + encodeURIComponent(parameters.keyId),
                     host : endpoint.service.kms[auth.region],
                     method : 'PUT',
                     'if-match' : parameters['if-match'],
                     'opc-request-id' : parameters['opc-request-id'],
                     body : parameters.body },
                   callback );
};

function get( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/keys/' + encodeURIComponent(parameters.keyId),
                     host : endpoint.service.kms[auth.region],
                     'opc-request-id' : parameters['opc-request-id'],
                     method : 'GET' },
                    callback );
};

function disable( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + 
                            '/keys/' + encodeURIComponent(parameters.keyId) +
                            '/actions/disable',
                     host : endpoint.service.kms[auth.region],
                     'if-match' : parameters['if-match'],
                     'opc-retry-token' : parameters['opc-retry-token'],
                     'opc-request-id' : parameters['opc-request-id'],
                     method : 'POST' },
                    callback );
};

function enable( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + 
                            '/keys/' + encodeURIComponent(parameters.keyId) +
                            '/actions/enable',
                     host : endpoint.service.kms[auth.region],
                     'if-match' : parameters['if-match'],
                     'opc-retry-token' : parameters['opc-retry-token'],
                     'opc-request-id' : parameters['opc-request-id'],
                     method : 'POST' },
                    callback );
};


module.exports = {
    update: update,
    get: get,
    create: create,
    disable: disable,
    enable: enable
    };
