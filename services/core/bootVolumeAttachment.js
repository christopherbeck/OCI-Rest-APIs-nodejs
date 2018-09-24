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
  if ( parameters.volumeGroupId !== undefined )
    query = query + '&volumeGroupId=' + encodeURIComponent(parameters.volumeGroupId);

  ocirest.process( auth, 
                   { path : auth.RESTversion + '/bootVolumes' + query,
                     host : endpoint.service.core[auth.region],
                     method : 'GET' }, 
                   callback );
};

function update( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path: auth.RESTversion + '/bootVolumes/' + 
                           encodeURIComponent(parameters.bootVolumeId),
                     host : endpoint.service.core[auth.region],
                     method : 'PUT',
                    'if-match' : parameters['if-match'],
                     body : parameters.body },
                   callback );
};

module.exports = {
    list: list,
    update: update,
    get: get,
    detach: detach,
    create: create,
    drop: drop
    };
