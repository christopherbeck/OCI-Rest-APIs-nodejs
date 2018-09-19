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
                     { path : auth.RESTversion + '/autonomousDataWarehouseBackups/' + encodeURIComponent(parameters.autonomousDatabaseBackupId),
                       host : endpoint.service.database[auth.region],
                       'opc-request-id' : parameters['opc-request-id'],
                       method : 'POST' },
                      callback );
  };

  function list( auth, parameters, callback ) {
    var path = '';
    if ( 'autonomousdatabaseId' in parameters )
      path = path + 'autonomousdatabaseId=' + encodeURIComponent( parameters.autonomousdatabaseId );

    if ( 'compartmentId' in parameters )
      path = path + 'compartmentId=' + encodeURIComponent( parameters.compartmentId );

    if ( 'limit' in parameters )
      path = path + '&limit=' + encodeURIComponent( parameters.limit );

    if ( 'page' in parameters )
      path = path + '&page=' + encodeURIComponent( parameters.page );

    if ( 'sortBy' in parameters )
      path = path + '&sortBy=' + encodeURIComponent( parameters.sortBy );

    if ( 'limit' in parameters )
      path = path + '&limit=' + encodeURIComponent( parameters.limit );

    if ( 'sortOrder' in parameters )
      path = path + '&sortOrder=' + encodeURIComponent( parameters.sortOrder );

    if ( 'lifecycleState' in parameters )
      path = path + '&lifecycleState=' + encodeURIComponent( parameters.lifecycleState );

    if ( 'displayName' in parameters )
      path = path + '&displayName=' + encodeURIComponent( parameters.displayName );

    ocirest.process( auth,
                     { path : auth.RESTversion + '/autonomousDataWarehouseBackups?' + path,
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