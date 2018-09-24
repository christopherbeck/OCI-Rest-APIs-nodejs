var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function action( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + '/dbNodes/' +
                              encodeURIComponent( parameters.dbNodeId) +
                              '?action=' + encodeURIComponent(parameters.action),
                       host : endpoint.service.database[auth.region],
                       method : 'POST',
                       'opc-retry-token' : parameters['opc-retry-token'],
                       'if-match' : parameters['if-match'],
                       body : parameters.body },
                     callback );
  };

function get( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + '/dbNodes/' + encodeURIComponent(parameters.dbNodeId),
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
    
    ocirest.process( auth,
                     { path : auth.RESTversion + '/dbNodes' + 
                              '?compartmentId=' + encodeURIComponent(parameters.compartmentId) +
                              '&dbSystemId=' + encodeURIComponent(parameters.dbSystemId) +
                              query,
                       host : endpoint.service.database[auth.region],
                       method : 'GET' },
                     callback );
  };

module.exports = {
    action: action,
    get: get,
    list: list
}