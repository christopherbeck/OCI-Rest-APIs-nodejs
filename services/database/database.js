var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function get( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/databases/' + 
                            encodeURIComponent(parameters.databaseId),
                     host : endpoint.service.database[auth.region],
                     method : 'GET' },
                    callback );
};

function list( auth, parameters, callback ) {
  var query = '';
  if ( 'limit' in parameters )
    query = query + '&limit=' + encodeURIComponent(parameters.limit);
  if ( 'page' in parameters )
    query = query + '&page=' + encodeURIComponent(parameters.page);
  if ( 'sortBy' in parameters )
    query = query + '&sortBy=' + encodeURIComponent(parameters.sortBy);
  if ( 'sortOrder' in parameters )
    query = query + '&sortOrder=' + encodeURIComponent(parameters.sortOrder);
  if ( 'lifecycleState' in parameters )
    query = query + '&lifecycleState=' + encodeURIComponent(parameters.lifecycleState);
  if ( 'dbName' in parameters )
    query = query + '&dbName=' + encodeURIComponent(parameters.dbName);
  ocirest.process( auth,
                   { path : auth.RESTversion + '/databases' + 
                            '?compartmentId=' + encodeURIComponent(parameters.compartmentId) +
                            '&dbHomeId=' + encodeURIComponent(parameters.dbHomeId) + query,
                     host : endpoint.service.database[auth.region],
                     method : 'GET' },
                    callback );
};

function restore( auth, parameters, callback ) {
  ocirest.process( auth,
                    { path: auth.RESTversion + '/databases/' + 
                            encodeURIComponent(parameters.databaseId),
                     host : endpoint.service.database[auth.region],
                     method : 'POST',
                     'if-match' : parameters['if-match'],
                     body : parameters.body },
                   callback );
};

function update( auth, parameters, callback ) {
  ocirest.process( auth,
                    { path: auth.RESTversion + '/databases/' + 
                            encodeURIComponent(parameters.databaseId),
                     host : endpoint.service.database[auth.region],
                     method : 'PUT',
                     'if-match' : parameters['if-match'],
                     body : parameters.body },
                   callback );
};


module.exports = {
    list: list,
    update: update,
    get: get,
    restore: restore
    };
