var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function get( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/nodePoolOptions/' + encodeURIComponent(parameters.nodePoolOptionId),
                     host : endpoint.service.containerEngine[auth.region],
                     'opc-request-id' : parameters['opc-request-id'],
                     method : 'GET' },
                    callback );
};

module.exports = {
    get: get
    };
