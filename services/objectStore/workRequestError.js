var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function list( auth, parameters, callback ){
    var query = '';
    if( 'limit' in parameters )
      query += (query==''?'&':'?') + 'limit=' + encodeURIComponent(parameters.limit);
    if( 'page' in parameters )
      query += (query==''?'&':'?') + 'page=' + encodeURIComponent(parameters.page);
      
    ocirest.process( auth,
                     { path : '/workRequests/' + encodeURIComponent(parameters.workRequestId)+ '/errors',
                       host : endpoint.service.objectStore[auth.region],
                       'opc-client-request-id' : parameters['opc-client-request-id'],
                       method : 'GET' },
                     callback );
  }

module.exports = {
  list : list
}