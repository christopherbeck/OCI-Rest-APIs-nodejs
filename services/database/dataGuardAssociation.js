var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function create( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + '/databases/' +
                              encodeURIComponent(parameters.databaseId) + 
                              '/dataGuardAssociations' ,
                       host : endpoint.service.database[auth.region],
                       method : 'POST',
                       'opc-retry-token' : parameters['opc-retry-token'],
                       body : parameters.body },
                     callback );
  };

function failover( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + '/databases/' +
                              encodeURIComponent(parameters.databaseId) + 
                              '/dataGuardAssociations/' +
                              encodeURIComponent(parameters.dataGuardAssociationsId) +
                              '/actions/failover',
                       host : endpoint.service.database[auth.region],
                       method : 'POST',
                       'opc-retry-token' : parameters['opc-retry-token'],
                       body : parameters.body },
                     callback );
  };

function get( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + '/databases/' +
                              encodeURIComponent(parameters.databaseId) + 
                              '/dataGuardAssociations/' +
                              encodeURIComponent(parameters.dataGuardAssociationsId) +
                              '/actions/failover',
                       host : endpoint.service.database[auth.region],
                       method : 'GET',
                       },
                     callback );
  };

function list( auth, parameters, callback ) {
    var query = '';
    if ( 'limit' in parameters )
      query = (query=='' ? '?' : '&' ) + 
            'limit=' + encodeURIComponent( parameters.limit );
    if ( 'page' in parameters )
      query = (query=='' ? '?' : '&' ) + 
            'page=' + encodeURIComponent( parameters.page );

    ocirest.process( auth,
                     { path : auth.RESTversion + '/databases/' +
                              encodeURIComponent(parameters.databaseId) + 
                              '/dataGuardAssociations' + query,
                       host : endpoint.service.database[auth.region],
                       method : 'GET' },
                     callback );
  };

function reinstate( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + '/databases/' +
                              encodeURIComponent(parameters.databaseId) + 
                              '/dataGuardAssociations/' + 
                              encodeURIComponent(parameters.dataGuardAssociationsId) +
                              '/actions/reinstate',
                       host : endpoint.service.database[auth.region],
                       'if-match' : parameters['if-match'],
                       method : 'POST',
                       body : parameters.body },
                     callback );
  };

function switchOver( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + '/databases/' +
                              encodeURIComponent(parameters.databaseId) + 
                              '/dataGuardAssociations/' + 
                              encodeURIComponent(parameters.dataGuardAssociationsId) +
                              '/actions/switchover',
                       host : endpoint.service.database[auth.region],
                       'if-match' : parameters['if-match'],
                       method : 'POST',
                       body : parameters.body },
                     callback );
  };


  module.exports = {
      create: create,
      failover: failover,
      get: get,
      list : list,
      reinstate : reinstate,
      switchOver: switchOver
  }