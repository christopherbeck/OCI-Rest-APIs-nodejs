var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function get( auth, parameters, callback ) {
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                              '/instances/' + encodeURIComponent(parameters.instanceId) +
                              'defaultCredentials',
                       host : endpoint.service.core[auth.region],
                       method : 'GET' }, 
                     callback );
  };

function getInitial( auth, parameters, callback ) {
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                              '/instances/' + encodeURIComponent(parameters.instanceId) +
                              'initialCredentials',
                       host : endpoint.service.core[auth.region],
                       method : 'GET' }, 
                     callback );
  };

  module.exports={
      get: get,
      getInitial: getInitial
  }