var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');


function list( auth, parameters, callback ) {
    var query = '';
    query = query + '?compartmentId=' + encodeURIComponent(parameters.compartmentId);
    query = query + '&availabilityDomain=' + encodeURIComponent(parameters.availabilityDomainId);
  
    ocirest.process( auth, 
                     { path : auth.RESTversion + '/faultDomains/' + query,
                       host : endpoint.service.iam[auth.region],
                       method : 'GET' }, 
                     callback );
  };

  
  module.exports={
      list: list
  }