var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function create( auth, options, callback ){
    ocirest.process( auth,
                     { path : auth.RESTversion + '/autonomousDatabaseBackups',
                       host : endpoint.service.database[auth.region],
                       method : 'POST',
                       body : options }, 
                     callback );
 };

 function get( auth, backUpId, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + '/autonomousDatabaseBackups/' + encodeURIComponent(backUpId),
                       host : endpoint.service.database[auth.region],
                       method : 'POST' },
                      callback );
  };

  function list( auth, options, callback ) {
    var path = '';
    if ( 'autonomousdatabaseId' in options )
      path = path + 'autonomousdatabaseId=' + encodeURIComponent( options.autonomousdatabaseId );

    if ( 'compartmentId' in options )
      path = path + 'compartmentId=' + encodeURIComponent( options.compartmentId );

    if ( 'limit' in options )
      path = path + '&limit=' + encodeURIComponent( options.limit );

    if ( 'page' in options )
      path = path + '&page=' + encodeURIComponent( options.page );

    if ( 'sortBy' in options )
      path = path + '&sortBy=' + encodeURIComponent( options.sortBy );

    if ( 'limit' in options )
      path = path + '&limit=' + encodeURIComponent( options.limit );

    if ( 'sortOrder' in options )
      path = path + '&sortOrder=' + encodeURIComponent( options.sortOrder );

    if ( 'lifecycleState' in options )
      path = path + '&lifecycleState=' + encodeURIComponent( options.lifecycleState );

    if ( 'displayName' in options )
      path = path + '&displayName=' + encodeURIComponent( options.displayName );

    if ( 'opc-request-id' in options )
      path = path + '&opc-request-id=' + encodeURIComponent( options.opc-request-id );

    ocirest.process( auth,
                     { path : auth.RESTversion + '/autonomousDatabaseBackups?' + path,
                       host : endpoint.service.database[auth.region],
                       method : 'GET' },
                      callback );
  };

  module.exports = {
      get: get,
      create: create,
      list: list
  }