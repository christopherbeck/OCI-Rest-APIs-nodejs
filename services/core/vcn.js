var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function create( auth, parameters, callback ){
  ocirest.process( auth,
                   { path : auth.RESTversion + '/vcns',
                     host : endpoint.service.core[auth.region],
                     method : 'POST',
                     'opc-retry-token' : parameters['opc-retry-token'],
                     body : parameters.body }, 
                   callback );
}

function update( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/vcns/' + encodeURIComponent(parameters.vncId),
                     host : endpoint.service.core[auth.region],
                     method : 'PUT',
                     'if-match' : parameters['if-match'],
                     body : parameters.body },
                   callback );
};

function get( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/vcns/' + encodeURIComponent(parameters.vncId),
                     host : endpoint.service.core[auth.region],
                     method : 'GET' },
                    callback );
};

function drop( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/vcns/' + encodeURIComponent(parameters.vncId),
                     host : endpoint.service.core[auth.region],
                     'if-match' : parameters['if-match'],
                     method : 'DELETE' },
                    callback );
};

function list( auth, parameters, callback ) {
  var query = '';
  query = query + '?compartmentId=' + encodeURIComponent( parameters.compartmentId);
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
                   { path : auth.RESTversion + '/vcns' +
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
