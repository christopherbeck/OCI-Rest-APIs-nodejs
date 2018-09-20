var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function create( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + '/backups' ,
                       host : endpoint.service.database[auth.region],
                       method : 'POST',
                       'opc-retry-token' : parameters['opc-retry-token'],
                       body : parameters.body },
                     callback );
  };

function drop( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + '/backups/'  +
                              encodeURIComponent(parameters.backupId),
                       host : endpoint.service.database[auth.region],
                       method : 'DELETE',
                       'if-match' : parameters['if-match'] },
                     callback );
  };


function get( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + '/backups/'  +
                              encodeURIComponent(parameters.backupId),
                       host : endpoint.service.database[auth.region],
                       method : 'GET' },
                     callback );
  };

function list( auth, parameters, callback ) {
    var query = '';
    var queryParameterExists = false;
    if( 'databaseId' in parameters ){
      query = query + (queryParameterExists?'&':'/?') +
              'databaseId=' + encodeURIComponent(parameters.datbaseId);
      queryParameterExists = true;
    }
    if( 'compartmentId' in parameters ){
      query = query + (queryParameterExists?'&':'/?') +
              'compartmentId=' + encodeURIComponent(parameters.compartmentId);
      queryParameterExists = true;
    }
    if( 'limit' in parameters ){
      query = query + (queryParameterExists?'&':'/?') +
              'limit=' + encodeURIComponent(parameters.limit);
      queryParameterExists = true;
    }
    if( 'page' in parameters ){
      query = query + (queryParameterExists?'&':'/?') +
              'page=' + encodeURIComponent(parameters.page);
      queryParameterExists = true;
    }
    ocirest.process( auth,
                     { path : auth.RESTversion + '/backups' + query,
                       host : endpoint.service.database[auth.region],
                       method : 'POST',
                       'opc-retry-token' : parameters['opc-retry-token'],
                       body : parameters.body },
                     callback );
  };


  module.exports = {
      create: create,
      drop: drop,
      get: get,
      list: list
  }