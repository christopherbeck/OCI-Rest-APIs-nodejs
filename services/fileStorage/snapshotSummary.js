var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function list( auth, parameters, callback ) {
  var query = '';
  query = query + '?fileSystemId=' + encodeURIComponent( parameters.fileSystemId);
  if ( 'limit' in parameters )
    query = query + '&limit=' + encodeURIComponent( parameters.limit );
  if ( 'page' in parameters )
    query = query + '&page=' + encodeURIComponent( parameters.page );
  if ( 'sortOrder' in parameters )
    query = query + '&sortOrder=' + encodeURIComponent( parameters.sortOrder );
  if ( 'lifecycleState' in parameters )
    query = query + '&lifecycleState=' + encodeURIComponent( parameters.lifecycleState );
  if ( 'id' in parameters )
    query = query + '&id=' + encodeURIComponent( parameters.id );

  ocirest.process( auth,
                   { path : auth.RESTversion + '/snapshots' +
                            query,
                     host : endpoint.service.fileStorage[auth.region],
                     method : 'GET' },
                    callback );
};

module.exports = {
    list: list
    };
