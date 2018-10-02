var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function get( auth, parameters, callback ) {
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                              '/services/' + encodeURIComponent(parameters.serviceId),
                       host : endpoint.service.core[auth.region],
                       method : 'GET' }, 
                     callback );
  };

function list( auth, parameters, callback ) {
    var query = '';
    if ( 'page' in parameters )
      query = query + (query==''?'?':'&') + 'page=' + encodeURIComponent(parameters.page);
    if ( 'limit' in parameters )
      query = query + (query==''?'?':'&') + 'limit=' + encodeURIComponent(parameters.limit);
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                      '/services' + query,
                       host : endpoint.service.core[auth.region],
                       method : 'GET' }, 
                     callback );
  };

  module.exports={
    list: list,
    get: get
  }