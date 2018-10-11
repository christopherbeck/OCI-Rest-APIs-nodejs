var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');


function create( auth, parameters, callback ){
  ocirest.process( auth,
                   { path : auth.RESTversion + '/bootVolumes',
                     host : endpoint.service.core[auth.region],
                     method : 'POST',
                     'opc-retry-token' :  parameters['opc-retry-token'],
                     body : parameters.body }, 
                   callback );
}

function drop( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/bootVolumes/' + 
                            encodeURIComponent(parameters.bootVolumeId),
                     host : endpoint.service.core[auth.region],
                     method : 'DELETE',
                     'if-match' : parameters['if-match'] },
                    callback )
};

function detach( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/bootVolumeAttachments/' + 
                            encodeURIComponent(parameters.bootVolumeId),
                     host : endpoint.service.core[auth.region],
                     method : 'DELETE',
                     'if-match' : parameters['if-match'] },
                    callback )
};


function get( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/bootVolumes/' + 
                            encodeURIComponent(parameters.bootVolumeId),
                     host : endpoint.service.core[auth.region],
                     method : 'GET' },
                    callback );
};

function list( auth, parameters, callback ) {
  var query = '';
  query += '?availabilityDomain=' + encodeURIComponent(parameters.availabilityDomain);
  query += '&compartmentId=' + encodeURIComponent(parameters.compartmentId);
  if ( parameters.limit !== undefined )
    query += '&limit=' + encodeURIComponent(parameters.limit);
  if ( parameters.page !== undefined )
    query += '&page=' + encodeURIComponent(parameters.page);
  if ( parameters.volumeGroupId !== undefined )
    query += '&volumeGroupId=' + encodeURIComponent(parameters.volumeGroupId);

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
