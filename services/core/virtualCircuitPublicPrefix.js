var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function bulkAdd( auth, parameters, callback ){
  ocirest.process( auth,
                   { path : auth.RESTversion + '/virtualCircuits' + encodeURIComponent(parameters.virtualCircuitId) +
                            '/actions/bulkAddPublicPrefixes',
                     host : endpoint.service.core[auth.region],
                     method : 'POST',
                     body : options }, 
                   callback );
}

function bulkDelete( auth, parameters, callback ){
  ocirest.process( auth,
                   { path : auth.RESTversion + '/virtualCircuits' + encodeURIComponent(parameters.virtualCircuitId) +
                            '/actions/bulkDeletePublicPrefixes',
                     host : endpoint.service.core[auth.region],
                     method : 'POST',
                     body : options }, 
                   callback );
}

function list( auth, parameters, callback ) {
  var query = '';
  if ( 'verificationState' in parameters )
    query = query + '?verificationState=' + encodeURIComponent( parameters.verificationState );

  ocirest.process( auth,
                   { path : auth.RESTversion + '/virtualCircuits' + encodeURIComponent(parameters.virtualCircuitId) +
                            '/publicPrefixes' + query,
                     host : endpoint.service.core[auth.region],
                     method : 'GET' },
                    callback );
};

module.exports = {
    list: list,
    bulkAdd: bulkAdd,
    bulkDelete: bulkDelete
    };
