var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');


function attach( auth, parameters, callback ){
  ocirest.process( auth,
                   { path : auth.RESTversion + '/bootVolumeAttachments/' + encodeURIComponent(parameters.bootVolumeId),
                     host : endpoint.service.core[auth.region],
                     method : 'PUT',
                     'if-match' :  parameters['if-match'],
                     body : parameters.body }, 
                   callback );
}

function get( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/bootVolumeAttachments/' + 
                            encodeURIComponent(parameters.bootVolumeAttachmentId),
                     host : endpoint.service.core[auth.region],
                     method : 'GET' },
                    callback );
};

function list( auth, parameters, callback ) {
  var query = '';
  query = query + '?availabilityDomain=' + encodeURIComponent(parameters.availabilityDomain);
  query = query + '&compartmentId=' + encodeURIComponent(parameters.compartmentId);
  if ( parameters.limit !== undefined )
    query = query + '&limit=' + encodeURIComponent(parameters.limit);
  if ( parameters.page !== undefined )
    query = query + '&page=' + encodeURIComponent(parameters.page);
  if ( parameters.instanceId !== undefined )
    query = query + '&instanceId=' + encodeURIComponent(parameters.instanceId);
  if ( parameters.bootVolumeId !== undefined )
    query = query + '&bootVolumeId=' + encodeURIComponent(parameters.bootVolumeId);

  ocirest.process( auth, 
                   { path : auth.RESTversion + '/bootVolumeAttachments/' + query,
                     host : endpoint.service.core[auth.region],
                     method : 'GET' }, 
                   callback );
};


module.exports = {
    list: list,
    attach: attach,
    get: get
    };
