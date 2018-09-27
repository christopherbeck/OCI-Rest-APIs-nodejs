var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function list( auth, parameters, callback ) {
    var query = '';
    query = '?compartmentId=' + encodeURIComponent(parameters.compartmentId);
    query = query + 'protocol=' + encodeURIComponent(parameters.protocol);
    if ( 'page' in parameters )
      query = query + '&page=' + encodeURIComponent(parameters.page);
    if ( 'limit' in parameters )
      query = query + '&limit=' + encodeURIComponent(parameters.limit);
    if ( 'includeSubcompartments' in parameters )
      query = query + '&includeSubcompartments=' + encodeURIComponent(parameters.includeSubcompartments);
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                              '/tagNamespaces/' + encodeURIComponent(parameters.policyId) +
                              query,
                       host : endpoint.service.iam[auth.region],
                       method : 'GET' }, 
                     callback );
  };

  module.exports={
      list: list
  }