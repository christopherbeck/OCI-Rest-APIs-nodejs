var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function create( auth, parameters, callback ){
  ocirest.process( auth,
                   { path : auth.RESTversion + '/volumeBackups',
                     host : endpoint.service.core[auth.region],
                     method : 'POST',
                     'opc-client-response' : parameters['opc-client-response'],
                     body : options }, 
                   callback );
}

function update( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/volumeBackups/' + encodeURIComponent(parameters.volumeBackupId),
                     host : endpoint.service.core[auth.region],
                     method : 'PUT',
                     'if-match' : parameters['if-match'],
                     body : options },
                   callback );
};

function get( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/volumeBackups/' + encodeURIComponent(parameters.volumeBackupId),
                     host : endpoint.service.core[auth.region],
                     method : 'GET' },
                    callback );
};

function drop( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/volumeBackups/' + encodeURIComponent(parameters.volumeBackupId),
                     host : endpoint.service.core[auth.region],
                     'if-match' : parameters['if-match'],
                     method : 'DELETE' },
                    callback );
};

function list( auth, parameters, callback ) {
  var query = '';
  query = query + '?compartmentId=' + encodeURIComponent( parameters.compartmentId);
  if ( 'volumeId' in parameters )
    query = query + '&volumeId=' + encodeURIComponent( parameters.volumeId );
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

  ocirest.process( auth,
                   { path : auth.RESTversion + '/volumeBackups' +
                            query,
                     host : endpoint.service.core[auth.region],
                     method : 'GET' },
                    callback );
};

module.exports = {
    list: list,
    update: update,
    get: get,
    create: create,
    drop: drop
    };
