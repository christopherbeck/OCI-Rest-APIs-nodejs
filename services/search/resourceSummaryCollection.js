var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function search( auth, parameters, callback ) {
  var query = '';
  if ( 'limit' in parameters )
    query = query + '&limit=' + encodeURIComponent( parameters.limit );
  if ( 'page' in parameters )
    query = query + '&page=' + encodeURIComponent( parameters.page );
  ocirest.process( auth,
                   { path : auth.RESTversion + '/resources' + query,
                     host : endpoint.service.search[auth.region],
                     'opc-request-id' : parameters['opc-request-id'],
                     body : parameters.body,
                     method : 'POST' },
                    callback );
};

module.exports = {
    search: search
    };
