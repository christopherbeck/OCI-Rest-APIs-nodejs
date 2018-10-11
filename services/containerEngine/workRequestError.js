var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function list( auth, parameters, callback ) {
  var query = '';
  query = query + '?compartmentId=' + encodeURIComponent( parameters.compartmentId);

  ocirest.process( auth,
                   { path : auth.RESTversion + 
                            '/workRequests/' + encodeURIComponent(parameters.workRequestId) + 
                            '/errors' + query,
                     host : endpoint.service.containerEngine[auth.region],
                     'opc-request-id' : parameters['opc-request-id'],
                     method : 'GET' },
                    callback );
};

module.exports = {
    list: list
    };
