var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function get( auth, parameters, callback ) {
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                              '/ipsecConnections/' + encodeURIComponent(parameters.ipsecId) +
                              '/deviceStatus',
                       host : endpoint.service.core[auth.region],
                       method : 'GET' }, 
                     callback );
  };

  module.exports={
      get: get
  }