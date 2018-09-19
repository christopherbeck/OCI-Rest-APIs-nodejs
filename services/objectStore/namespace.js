var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function get( auth, parameters, callback ){
  ocirest.process( auth,
                   { path : '/n/',
                     host : endpoint.service.objectStore[auth.region],
                     'opc-client-request-id' : parameters['opc-client-requesrt-id'],
                     method : 'GET' },
                   callback );
}

function getMetadata( auth, parameters, callback ){
  ocirest.process( auth,
                   { path : '/n/' + encodeURIComponent( parameters.namespaceName),
                     host : endpoint.service.objectStore[auth.region],
                     'opc-client-request-id' : parameters['opc-client-requesrt-id'],
                     method : 'GET' },
                   callback );
}

function updateMetadata( auth, parameters, callback ){
  ocirest.process( auth,
                   { path : '/n/' + encodeURIComponent(parameters.namespaceName),
                     host : endpoint.service.objectStore[auth.region],
                     method : 'PUT',
                     'opc-client-request-id' : parameters['opc-client-requesrt-id'],
                     body : parameters.body },
                   callback );
}

module.exports = {
    get: get,
    getMetadata: getMetadata,
    updateMetadata: updateMetadata
}