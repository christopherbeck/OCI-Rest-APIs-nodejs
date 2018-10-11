var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function attach( auth, parameters, callback ){
  ocirest.process( auth,
                   { path : auth.RESTversion + '/volumeAttachments/',
                     host : endpoint.service.core[auth.region],
                     method : 'POST',
                     'opc-retry-token' : parameters['opc-retry-token'],
                     body : options }, 
                   callback );
}

function get( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/volumeAttachments/' + encodeURIComponent(parameters.volumeAttachmentId),
                     host : endpoint.service.core[auth.region],
                     method : 'GET' },
                    callback );
};

function list( auth, parameters, callback ) {
  var query = '';
  query = query + '?compartmentId=' + encodeURIComponent( parameters.compartmentId);
  if ( 'availabilityDomain' in parameters )
    query = query + '&availabilityDomain=' + encodeURIComponent( parameters.availabilityDomain );
  if ( 'volumeGroupId' in parameters )
    query = query + '&volumeGroupId=' + encodeURIComponent( parameters.volumeGroupId );
  if ( 'limit' in parameters )
    query = query + '&limit=' + encodeURIComponent( parameters.limit );
  if ( 'page' in parameters )
    query = query + '&page=' + encodeURIComponent( parameters.page );
  if ( 'instanceId' in parameters )
    query = query + '&instanceId=' + encodeURIComponent( parameters.instanceId );
  if ( 'volumeId' in parameters )
    query = query + '&volumeId=' + encodeURIComponent( parameters.volumeId );

  ocirest.process( auth,
                   { path : auth.RESTversion + '/volumes' +
                            query,
                     host : endpoint.service.core[auth.region],
                     method : 'GET' },
                    callback );
};

module.exports = {
    list: list,
    get: get,
    attach: attach
    };
