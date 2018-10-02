var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');


function get( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/vnics/' + encodeURIComponent(parameters.vnicId),
                     host : endpoint.service.core[auth.region],
                     method : 'GET' },
                    callback );
};

function update( auth, parameters, callback ) {
  ocirest.process( auth, 
                   { path : auth.RESTversion + 
                            '/vnics/' + encodeURIComponent(parameters.vnicId),
                     host : endpoint.service.core[auth.region],
                     'if-match' : parameters['if-match'],
                     body : parameters.body,
                     method : 'PUT' }, 
                   callback );
};

module.exports = {
    get: get,
    update: update
    };
