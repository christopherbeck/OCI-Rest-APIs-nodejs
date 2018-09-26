var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');


function create( auth, parameters, callback ){
  ocirest.process( auth,
                   { path : auth.RESTversion + '/bootVolumeBackups',
                     host : endpoint.service.core[auth.region],
                     method : 'POST',
                     'opc-retry-token' :  parameters['opc-retry-token'],
                     body : parameters.body }, 
                   callback );
}

function drop( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/bootVolumeBackups/' + 
                            encodeURIComponent(parameters.bootVolumeBackupId),
                     host : endpoint.service.core[auth.region],
                     method : 'DELETE',
                     'if-match' : parameters['if-match'] },
                    callback )
};

function get( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/bootVolumeBackups/' + 
                            encodeURIComponent(parameters.bootVolumeBackupId),
                     host : endpoint.service.core[auth.region],
                     method : 'GET' },
                    callback );
};

function list( auth, parameters, callback ) {
  var query = '';
  query = query + '?compartmentId=' + encodeURIComponent(parameters.compartmentId);
  if ( parameters.bootVolumeId !== undefined )
    query = query + '&bootVolumeId=' + encodeURIComponent(parameters.bootVolumeId);
  if ( parameters.limit !== undefined )
    query = query + '&limit=' + encodeURIComponent(parameters.limit);
  if ( parameters.page !== undefined )
    query = query + '&page=' + encodeURIComponent(parameters.page);
  if ( parameters.sortBy !== undefined )
    query = query + '&sortBy=' + encodeURIComponent(parameters.sortBy);
  if ( parameters.sortOrder !== undefined )
    query = query + '&sortOrder=' + encodeURIComponent(parameters.sortOrder);
  if ( parameters.lifecycleState !== undefined )
    query = query + '&lifecycleState=' + encodeURIComponent(parameters.lifecycleState);
  if ( parameters.displayName !== undefined )
    query = query + '&displayName=' + encodeURIComponent(parameters.displayName);

  ocirest.process( auth, 
                   { path : auth.RESTversion + '/bootVolumeBackups' + query,
                     host : endpoint.service.core[auth.region],
                     method : 'GET' }, 
                   callback );
};

function update( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path: auth.RESTversion + '/bootVolumeBackups/' + 
                           encodeURIComponent(parameters.bootVolumeBackId),
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
    create: create,
    drop: drop
    };
