var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function create( auth, parameters, callback ){
  ocirest.process( auth,
                   { path : auth.RESTversion + '/volumnBackupPolicyAssignments',
                     host : endpoint.service.core[auth.region],
                     method : 'POST',
                     body : options }, 
                   callback );
}

function getAsset( auth, parameters, callback ) {
  var query = '';
  query = query + '?assetId=' + encodeURIComponent( parameters.assetId);
  if ( 'limit' in parameters )
    query = query + '&limit=' + encodeURIComponent( parameters.limit );
  if ( 'page' in parameters )
    query = query + '&page=' + encodeURIComponent( parameters.page );
  ocirest.process( auth,
                   { path : auth.RESTversion + '/volumnBackupPolicyAssignments/' + query,
                     host : endpoint.service.core[auth.region],
                     method : 'GET' },
                    callback );
};

function get( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + 
                            '/volumnBackupPolicyAssignments/' + encodeURIComponent(parameters.policyAssignmentId),
                     host : endpoint.service.core[auth.region],
                     method : 'GET' },
                    callback );
};


function drop( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/volumnBackupPolicyAssignments/' + encodeURIComponent(parameters.policyAssignmentId),
                     host : endpoint.service.core[auth.region],
                     'if-match' : parameters['if-match'],
                     method : 'DELETE' },
                    callback );
};

module.exports = {
    getAsset: getAsset,
    get: get,
    create: create,
    drop: drop
    };
