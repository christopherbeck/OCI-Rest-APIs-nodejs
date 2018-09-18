var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function get( auth, callback ){
  ocirest.process( auth,
                   { path : '/n/',
                     host : endpoint.service.objectStore[auth.region],
                     method : 'GET' },
                   callback );
}

function getMetadata( auth, namespaceName, callback ){
  ocirest.process( auth,
                   { path : '/n/' + namespaceName,
                     host : endpoint.service.objectStore[auth.region],
                     method : 'GET' },
                   callback );
}

function updateMetadata( auth, namespaceName, options, callback ){
  ocirest.process( auth,
                   { path : '/n/' + namespaceName,
                     host : endpoint.service.objectStore[auth.region],
                     method : 'PUT',
                     body : options },
                   callback );
}

module.exports = {
    get: get,
    getMetadata: getMetadata,
    updateMetadata: updateMetadata
}