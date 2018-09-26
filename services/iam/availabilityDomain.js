var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');


function list( auth, parameters, callback ) {
    var query = '';
    query = query + '?compartmentId=' + encodeURIComponent(parameters.compartmentId);
  
    ocirest.process( auth, 
                     { path : auth.RESTversion + '/availabilityDomains/' + query,
                       host : endpoint.service.iam[auth.region],
                       method : 'GET' }, 
                     callback );
  };

  
  module.exports={
      list: list
  }