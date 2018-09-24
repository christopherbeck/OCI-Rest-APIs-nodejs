var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function launch( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + '/dbSystems',
                       host : endpoint.service.database[auth.region],
                       method : 'POST',
                       'opc-retry-token' : parameters['opc-retry-token'],
                       body : parameters.body },
                     callback );
  };

function get( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + '/dbSystems/' + encodeURIComponent(parameters.dbSystemId),
                       host : endpoint.service.database[auth.region],
                       method : 'GET' },
                     callback );
  };

function terminate( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + '/dbSystems/' + encodeURIComponent(parameters.dbSystemId),
                       host : endpoint.service.database[auth.region],
                       'if-match' : parameters['if-match'],
                       method : 'DELETE' },
                     callback );
  };
function update( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + '/dbSystems/' + encodeURIComponent(parameters.dbSystemId),
                       host : endpoint.service.database[auth.region],
                       'if-match' : parameters['if-match'],
                       method : 'PUT',
                       body : parameters.body },
                     callback );
  };


function list( auth, parameters, callback ) {
    var query = '';
    if( 'limit' in parameters )
      query = query + '&limit=' + encodeURIComponent(parameters.limit);
    if( 'page' in parameters )
      query = query + '&page=' + encodeURIComponent(parameters.page);
    if( 'backId' in parameters )
      query = query + '&backId=' + encodeURIComponent(parameters.backId);
    if( 'sortBy' in parameters )
      query = query + '&sortBy=' + encodeURIComponent(parameters.sortBy);
    if( 'sortOrder' in parameters )
      query = query + '&sortOrder=' + encodeURIComponent(parameters.sortOrder);
    if( 'lifecycleState' in parameters )
      query = query + '&lifecycleState=' + encodeURIComponent(parameters.lifecycleState);
    if( 'availabilityDomain' in parameters )
      query = query + '&availabilityDomain=' + encodeURIComponent(parameters.availabilityDomain);
    if( 'displayName' in parameters )
      query = query + '&displayName=' + encodeURIComponent(parameters.displayName);
    
    ocirest.process( auth,
                     { path : auth.RESTversion + '/dbSystems' + 
                              '?compartmentId=' + encodeURIComponent(parameters.compartmentId) +
                              query,
                       host : endpoint.service.database[auth.region],
                       method : 'GET' },
                     callback );
  };

module.exports = {
    get: get,
    list: list,
    launch: launch,
    terminate: terminate,
    update: update
}