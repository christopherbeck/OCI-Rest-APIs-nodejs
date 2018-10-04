var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function list( auth, parameters, callback ) {
  var query = '';
  query = query + '?compartmentId=' + encodeURIComponent( parameters.compartmentId);
  query = query + '&availabilityDomain=' + encodeURIComponent( parameters.availabilityDomain);
  if ( 'limit' in parameters )
    query = query + '&limit=' + encodeURIComponent( parameters.limit );
  if ( 'page' in parameters )
    query = query + '&page=' + encodeURIComponent( parameters.page );
  if ( 'displayName' in parameters )
    query = query + '&displayName=' + encodeURIComponent( parameters.displayName );
  if ( 'sortBy' in parameters )
    query = query + '&sortBy=' + encodeURIComponent( parameters.sortBy );
  if ( 'sortOrder' in parameters )
    query = query + '&sortOrder=' + encodeURIComponent( parameters.sortOrder );
  if ( 'lifecycleState' in parameters )
    query = query + '&lifecycleState=' + encodeURIComponent( parameters.lifecycleState );
  if ( 'id' in parameters )
    query = query + '&id=' + encodeURIComponent( parameters.id );

  ocirest.process( auth,
                   { path : auth.RESTversion + '/fileSystems' +
                            query,
                     host : endpoint.service.fileStorage[auth.region],
                     method : 'GET' },
                    callback );
};

module.exports = {
    list: list
    };
