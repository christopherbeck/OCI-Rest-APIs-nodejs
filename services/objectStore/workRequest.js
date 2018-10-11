var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function cancel( auth, parameters, callback ){
    ocirest.process( auth,
                     { path : '/workRequests/' + encodeURIComponent(parameters.workRequestId),
                       host : endpoint.service.objectStore[auth.region],
                       'opc-client-request-id' : parameters['opc-client-request-id'],
                       method : 'DELETE' },
                     callback );
  }

function get( auth, parameters, callback ){
    ocirest.process( auth,
                     { path : '/workRequests/' + encodeURIComponent(parameters.workRequestId),
                       host : endpoint.service.objectStore[auth.region],
                       'opc-client-request-id' : parameters['opc-client-request-id'],
                       method : 'GET' },
                     callback );
  }

function list( auth, parameters, callback ){
    var query = '';
    if( 'limit' in parameters )
      query += (query==''?'&':'?') + 'limit=' + encodeURIComponent(parameters.limit);
    if( 'page' in parameters )
      query += (query==''?'&':'?') + 'page=' + encodeURIComponent(parameters.page);
    if( 'workRequestType' in parameters )
      query += (query==''?'&':'?') + 'workRequestType=' + encodeURIComponent(parameters.workRequestType);
      
    ocirest.process( auth,
                     { path : '/workRequests',
                       host : endpoint.service.objectStore[auth.region],
                       'opc-client-request-id' : parameters['opc-client-request-id'],
                       method : 'GET' },
                     callback );
  }

module.exports = {
  cancel : cancel,
  get : get,
  list : list
}