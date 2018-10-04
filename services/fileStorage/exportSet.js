var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function update( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/exportSets/' + encodeURIComponent(parameters.exportSetId),
                     host : endpoint.service.fileStorage[auth.region],
                     method : 'PUT',
                     'if-match' : parameters['if-match'],
                     body : parameters.body },
                   callback );
};

function get( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/exportSets/' + encodeURIComponent(parameters.exportSetId),
                     host : endpoint.service.fileStorage[auth.region],
                     method : 'GET' },
                    callback );
};

module.exports = {
    update: update,
    get: get
    };
