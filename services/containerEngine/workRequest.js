var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');


function get( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/workRequests/' + encodeURIComponent(parameters.workRequestId),
                     host : endpoint.service.containerEngine[auth.region],
                     'opc-request-id' : parameters['opc-request-id'],
                     method : 'GET' },
                    callback );
};

function drop( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/workRequests/' + encodeURIComponent(parameters.workRequestId),
                     host : endpoint.service.containerEngine[auth.region],
                     'if-match' : parameters['if-match'],
                     'opc-request-id' : parameters['opc-request-id'],
                     method : 'DELETE' },
                    callback );
};

module.exports = {
    get: get,
    drop: drop
    };
