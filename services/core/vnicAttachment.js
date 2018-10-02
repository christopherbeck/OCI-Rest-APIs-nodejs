var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function attach( auth, parameters, callback ){
  ocirest.process( auth,
                   { path : auth.RESTversion + '/vnicAttachments',
                     host : endpoint.service.core[auth.region],
                     method : 'POST',
                     'opc-client-response' : parameters['opc-client-response'],
                     body : options }, 
                   callback );
}

function get( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/vnicAttachments/' + encodeURIComponent(parameters.vnicAttachmentId),
                     host : endpoint.service.core[auth.region],
                     method : 'GET' },
                    callback );
};

function detatch( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/vnicAttachments/' + encodeURIComponent(parameters.vnicAttachmentId),
                     host : endpoint.service.core[auth.region],
                     'if-match' : parameters['if-match'],
                     method : 'DELETE' },
                    callback );
};

function list( auth, parameters, callback ) {
  var query = '';
  query = query + '?compartmentId=' + encodeURIComponent( parameters.compartmentId);
  if ( 'availabilityDomain' in parameters )
    query = query + '&availabilityDomain=' + encodeURIComponent( parameters.availabilityDomain );
  if ( 'instanceId' in parameters )
    query = query + '&instanceId=' + encodeURIComponent( parameters.instanceId );
  if ( 'limit' in parameters )
    query = query + '&limit=' + encodeURIComponent( parameters.limit );
  if ( 'page' in parameters )
    query = query + '&page=' + encodeURIComponent( parameters.page );
  if ( 'vnicId' in parameters )
    query = query + '&vnicId=' + encodeURIComponent( parameters.vnicId );

  ocirest.process( auth,
                   { path : auth.RESTversion + '/vnicAttachments/' +
                            query,
                     host : endpoint.service.core[auth.region],
                     method : 'GET' },
                    callback );
};

module.exports = {
    list: list,
    get: get,
    attach: attach,
    detatch: detatch
    };
