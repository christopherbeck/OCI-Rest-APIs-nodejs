var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function list( auth, parameters, callback ) {
  var query = '';
  query = query + '?compartmentId=' + encodeURIComponent( parameters.compartmentId);
  query = query + '?startTime=' + encodeURIComponent( parameters.startTime);
  query = query + '?endTime=' + encodeURIComponent( parameters.endTime);
  if ( 'page' in parameters )
    query = query + '&page=' + encodeURIComponent( parameters.page );

  ocirest.process( auth,
                   { path : auth.RESTversion + '/auditEvents' +
                            query,
                     host : endpoint.service.audit[auth.region],
                     'opc-client-response' : parameters['opc-client-response'],
                     method : 'GET' },
                    callback );
};

module.exports = {
    list: list
    };
