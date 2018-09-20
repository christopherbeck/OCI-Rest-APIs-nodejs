var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function create( auth, parameters, callback ){
    ocirest.process( auth,
                     { path : auth.RESTversion + '/autonomousDataWarehouseBackups',
                       host : endpoint.service.database[auth.region],
                       method : 'POST',
                       'opc-request-id' : parameters['opc-request-id'],
                       'opc-retry-token' : parameters['opc-retry-token'],
                       body : parameters.body }, 
                     callback );
 };

 function get( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + '/autonomousDataWarehouseBackups/' + 
                              encodeURIComponent(parameters.autonomousDatabaseBackupId),
                       host : endpoint.service.database[auth.region],
                       'opc-request-id' : parameters['opc-request-id'],
                       method : 'POST' },
                      callback );
  };

  function list( auth, parameters, callback ) {
    var query = '';
    if ( 'autonomousdatabaseId' in parameters )
      query = query + 'autonomousdatabaseId=' + encodeURIComponent( parameters.autonomousdatabaseId );

    if ( 'compartmentId' in parameters )
      query = query + 'compartmentId=' + encodeURIComponent( parameters.compartmentId );

    if ( 'limit' in parameters )
      query = query + '&limit=' + encodeURIComponent( parameters.limit );

    if ( 'page' in parameters )
      query = query + '&page=' + encodeURIComponent( parameters.page );

    if ( 'sortBy' in parameters )
      query = query + '&sortBy=' + encodeURIComponent( parameters.sortBy );

    if ( 'limit' in parameters )
      query = query + '&limit=' + encodeURIComponent( parameters.limit );

    if ( 'sortOrder' in parameters )
      query = query + '&sortOrder=' + encodeURIComponent( parameters.sortOrder );

    if ( 'lifecycleState' in parameters )
      query = query + '&lifecycleState=' + encodeURIComponent( parameters.lifecycleState );

    if ( 'displayName' in parameters )
      query = query + '&displayName=' + encodeURIComponent( parameters.displayName );

    ocirest.process( auth,
                     { path : auth.RESTversion + '/autonomousDataWarehouseBackups?' + query,
                       host : endpoint.service.database[auth.region],
                       'opc-request-id' : parameters['opc-request-id'],
                       method : 'GET' },
                      callback );
  };

  module.exports = {
      get: get,
      create: create,
      list: list
  }