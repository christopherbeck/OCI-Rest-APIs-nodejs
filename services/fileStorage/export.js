var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function create( auth, parameters, callback ){
  ocirest.process( auth,
                   { path : auth.RESTversion + '/exports',
                     host : endpoint.service.fileStorage[auth.region],
                     method : 'POST',
                     'opc-client-response' : parameters['opc-client-response'],
                     body : parameters.body }, 
                   callback );
}

function update( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/exports/' + encodeURIComponent(parameters.exportId),
                     host : endpoint.service.fileStorage[auth.region],
                     method : 'PUT',
                     'if-match' : parameters['if-match'],
                     body : parameters.body },
                   callback );
};

function get( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/exports/' + encodeURIComponent(parameters.exportId),
                     host : endpoint.service.fileStorage[auth.region],
                     method : 'GET' },
                    callback );
};

function drop( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/exports/' + encodeURIComponent(parameters.exportId),
                     host : endpoint.service.fileStorage[auth.region],
                     'if-match' : parameters['if-match'],
                     method : 'DELETE' },
                    callback );
};

module.exports = {
    update: update,
    get: get,
    create: create,
    drop: drop
    };
