var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function list( auth, parameters, callback ) {
    ocirest.process( auth, 
                     { path : auth.RESTversion + '/regions',
                       host : endpoint.service.iam[auth.region],
                       'opc-request-id' : parameters['opc-request-id'],
                       method : 'GET' }, 
                     callback );
  };

  module.exports={
      list: list
  }