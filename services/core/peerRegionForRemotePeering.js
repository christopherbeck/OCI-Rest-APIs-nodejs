var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function list( auth, parameters, callback ) {
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                      '/allowedPeerRegionsForRemotePeering',
                       host : endpoint.service.core[auth.region],
                       method : 'GET' }, 
                     callback );
  };

  module.exports={
      list: list
  }