var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function get( auth, parameters, callback ) {
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                             '/tenancies/' + encodeURIComponent(parameters.tenancyId),
                       host : endpoint.service.iam[auth.region],
                       method : 'GET' }, 
                     callback );
  };

  module.exports={
      get: get
  }