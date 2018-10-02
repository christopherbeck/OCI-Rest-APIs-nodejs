var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function list( auth, parameters, callback ) {
    var query = '';
    query = query + '?compartmentId=' + encodeURIComponent(parameters.compartmentId);
    if ( 'page' in parameters )
      query = query + '&page=' + encodeURIComponent(parameters.page);
    if ( 'limit' in parameters )
      query = query + '&limit=' + encodeURIComponent(parameters.limit);
    if ( 'availabilityDomain' in parameters )
      query = query + '&availabilityDomain=' + encodeURIComponent(parameters.availabilityDomain);
    if ( 'imageId' in parameters )
      query = query + '&imageId=' + encodeURIComponent(parameters.imageId);
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                      '/shapes' + query,
                       host : endpoint.service.core[auth.region],
                       method : 'GET' }, 
                     callback );
  };

  module.exports={
    list: list
  }