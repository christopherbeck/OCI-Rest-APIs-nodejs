var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function update( auth, parameters, callback ) {
  var query = '';
  query = query + '?compartmentId=' + encodeURIComponent( parameters.compartmentId);
  ocirest.process( auth,
                   { path : auth.RESTversion + '/configuration' + query,
                     host : endpoint.service.core[auth.region],
                     method : 'PUT',
                     body : parameters.body },
                   callback );
};

function get( auth, parameters, callback ) {
  var query = '';
  query = query + '?compartmentId=' + encodeURIComponent( parameters.compartmentId);
  ocirest.process( auth,
                   { path : auth.RESTversion + '/configuration' + query,
                     host : endpoint.service.audit[auth.region],
                     method : 'GET' },
                    callback );
};

module.exports = {
    update: update,
    get: get
    };
