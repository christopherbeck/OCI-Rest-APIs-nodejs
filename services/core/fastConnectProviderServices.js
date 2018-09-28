var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function create( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + '/fastConnectProviderServices',
                       host : endpoint.service.core[auth.region],
                       method : 'POST',
                       body : parameters.body,
                       'opc-retry-token' : parameters['opc-retry-token'] },
                      callback )
  };

function list( auth, parameters, callback ) {
    var query = '';
    query = '?compartmentId=' + encodeURIComponent(parameters.compartmentId);
    if ( 'page' in parameters )
      query = query + '&page=' + encodeURIComponent(parameters.page);
    if ( 'limit' in parameters )
      query = query + '&limit=' + encodeURIComponent(parameters.limit);
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                      '/fastConnectProviderServices' + query,
                       host : endpoint.service.core[auth.region],
                       method : 'GET' }, 
                     callback );
  };

function listVirtualCircuitBandwidthShapes( auth, parameters, callback ) {
    var query = '';
    if ( 'page' in parameters )
      query = query + (query==''?'?':'&') + 'page=' + encodeURIComponent(parameters.page);
    if ( 'limit' in parameters )
      query = query + (query==''?'?':'&') + 'limit=' + encodeURIComponent(parameters.limit);
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                      '/fastConnectProviderServices/' + encodeURIComponent(parameters.providerServiceId) +
                      '/virtualCircuitBandwidthShapes' + query,
                       host : endpoint.service.core[auth.region],
                       method : 'GET' }, 
                     callback );
  };


  module.exports={
      list: list,
      listVirtualCircuitBandwidthShapes: listVirtualCircuitBandwidthShapes,
      get: get
  }