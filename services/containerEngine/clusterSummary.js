var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function list( auth, parameters, callback ) {
  var query = '';
  query = query + '?compartmentId=' + encodeURIComponent( parameters.compartmentId);
  if ( 'limit' in parameters )
    query = query + '&limit=' + encodeURIComponent( parameters.limit );
  if ( 'page' in parameters )
    query = query + '&page=' + encodeURIComponent( parameters.page );
  if ( 'sortBy' in parameters )
    query = query + '&sortBy=' + encodeURIComponent( parameters.sortBy );
  if ( 'sortOrder' in parameters )
    query = query + '&sortOrder=' + encodeURIComponent( parameters.sortOrder );
  if ( 'lifecycleState' in parameters )
    query = query + '&lifecycleState=' + encodeURIComponent( parameters.lifecycleState );
  if ( 'name' in parameters )
    query = query + '&name=' + encodeURIComponent( parameters.name );

  ocirest.process( auth,
                   { path : auth.RESTversion + '/clusters' + query,
                     host : endpoint.service.containerEngine[auth.region],
                     'opc-request-id' : parameters['opc-request-id'],
                     method : 'GET' },
                    callback );
};

module.exports = {
    list: list
    };
