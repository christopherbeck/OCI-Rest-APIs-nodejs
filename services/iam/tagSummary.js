var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function list( auth, parameters, callback ) {
    var query = '';
    if ( 'page' in parameters )
      query = query + (query==''?'?':'&') + 'page=' + encodeURIComponent(parameters.page);
    if ( 'limit' in parameters )
      query = query + (query==''?'?':'&') + 'limit=' + encodeURIComponent(parameters.limit);
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                              '/tagNamespaces/' + encodeURIComponent(parameters.policyId) +
                              '/tags' +
                              query,
                       host : endpoint.service.iam[auth.region],
                       method : 'GET' }, 
                     callback );
  };

  module.exports={
      list: list
  }