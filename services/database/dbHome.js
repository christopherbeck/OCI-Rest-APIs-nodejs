var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function create( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + '/dbHomes',
                       host : endpoint.service.database[auth.region],
                       method : 'POST',
                       'opc-retry-token' : parameters['opc-retry-token'],
                       body : parameters.body },
                     callback );
  };

  function drop( auth, parameters, callback ) {
    var query = '';
    if ( 'preformFinalBackup' in parameters )
      query = '/?preformFinalBackup=' + encodeURIComponent(parameters.preformFinalBackup);
    ocirest.process( auth,
                     { path : auth.RESTversion + '/dbHomes/' +
                              encodeURIComponent(parameters.dbHomeId) + query,
                       host : endpoint.service.database[auth.region],
                       method : 'DELETE',
                       'if-match' : parameters['if-match'] },
                     callback );
  };
 
function get( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + '/dbHomes/' + encodeURIComponent(parameters.dbHomeId),
                       host : endpoint.service.database[auth.region],
                       method : 'GET' },
                     callback );
  };

function list( auth, parameters, callback ) {
    var query = '';
    if( 'limit' in parameters )
      query = query + '&limit=' + encodeURIComponent(parameters.limit);
    if( 'page' in parameters )
      query = query + '&page=' + encodeURIComponent(parameters.page);
    if( 'sortBy' in parameters )
      query = query + '&sortBy=' + encodeURIComponent(parameters.sortBy);
    if( 'sortOrder' in parameters )
      query = query + '&sortOrder=' + encodeURIComponent(parameters.sortOrder);
    if( 'lifecycleState' in parameters )
      query = query + '&lifecycleState=' + encodeURIComponent(parameters.lifecycleState);
    if( 'displayName' in parameters )
      query = query + '&displayName=' + encodeURIComponent(parameters.displayName);
    
    ocirest.process( auth,
                     { path : auth.RESTversion + '/dbHomes' + 
                              '?compartmentId=' + encodeURIComponent(parameters.compartmentId) +
                              '&dbSystemId=' + encodeURIComponent(parameters.dbSystemId) +
                              query,
                       host : endpoint.service.database[auth.region],
                       method : 'GET' },
                     callback );
  };

  function update( auth, parameters, callback ) {
    var query = '';
    ocirest.process( auth,
                     { path : auth.RESTversion + '/dbHomes/' +
                              encodeURIComponent(parameters.dbHomeId),
                       host : endpoint.service.database[auth.region],
                       method : 'PUT',
                       'if-match' : parameters['if-match'],
                       body : parameters.body },
                     callback );
  };
 

module.exports = {
    create: create,
    drop: drop,
    get: get,
    list: list,
    update: update
}