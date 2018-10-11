var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function create( auth, parameters, callback ){
  ocirest.process( auth,
                   { path : auth.RESTversion + '/vaults',
                     host : endpoint.service.kms[auth.region],
                     method : 'POST',
                     'opc-request-id' : parameters['opc-request-id'],
                     'opc-retry-token' : parameters['opc-retry-token'],
                     body : parameters.body }, 
                   callback );
}

function update( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/vaults/' + encodeURIComponent(parameters.vaultId),
                     host : endpoint.service.kms[auth.region],
                     method : 'PUT',
                     'if-match' : parameters['if-match'],
                     'opc-request-id' : parameters['opc-request-id'],
                     body : parameters.body },
                   callback );
};

function get( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/vaults/' + encodeURIComponent(parameters.vaultId),
                     host : endpoint.service.kms[auth.region],
                     'opc-request-id' : parameters['opc-request-id'],
                     method : 'GET' },
                    callback );
};

function scheduleDeletion( auth, parameters, callback ){
  ocirest.process( auth,
                   { path : auth.RESTversion + '/vaults/' + encodeURIComponent(parameters.vaultId) +
                            '/actions/scheduleDeletion',
                     host : endpoint.service.kms[auth.region],
                     method : 'POST',
                     'opc-request-id' : parameters['opc-request-id'],
                     'opc-retry-token' : parameters['opc-retry-token'],
                     'if-match' : parameters['if-match'],
                     body : parameters.body }, 
                   callback );
}

function cancelDeletion( auth, parameters, callback ){
  ocirest.process( auth,
                   { path : auth.RESTversion + '/vaults/' + encodeURIComponent(parameters.vaultId) +
                            '/actions/cancelDeletion',
                     host : endpoint.service.kms[auth.region],
                     method : 'POST',
                     'opc-request-id' : parameters['opc-request-id'],
                     'opc-retry-token' : parameters['opc-retry-token'],
                     'if-match' : parameters['if-match'],
                     body : parameters.body }, 
                   callback );
}

module.exports = {
    update: update,
    get: get,
    create: create,
    scheduleDeletion: scheduleDeletion,
    cancelDeletion: cancelDeletion
    };
