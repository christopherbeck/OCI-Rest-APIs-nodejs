var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function add( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + '/userGroupMemberships/',
                       host : endpoint.service.iam[auth.region],
                       method : 'POST',
                       body : parameters.body,
                       'opc-retry-token' : parameters['opc-retry-token'] },
                      callback )
  };

function remove( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + 
                              '/userGroupMemberships/' + encodeURIComponent(parameters.userGroupMembershipId),
                       host : endpoint.service.iam[auth.region],
                       method : 'DELETE',
                       'if-match' : parameters['if-match'] },
                      callback )
  };

function get( auth, parameters, callback ) {
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                              '/userGroupMemberships/' + encodeURIComponent(parameters.userGroupMembershipId),
                       host : endpoint.service.iam[auth.region],
                       method : 'GET' }, 
                     callback );
  };

function list( auth, parameters, callback ) {
    var query = '';
    query = '?compartmentId=' + encodeURIComponent(parameters.compartmentId);
    if ( 'userId' in parameters )
      query = query + '&userId=' + encodeURIComponent(parameters.userId);
    if ( 'groupId' in parameters )
      query = query + '&groupId=' + encodeURIComponent(parameters.groupId);
    if ( 'page' in parameters )
      query = query + '&page=' + encodeURIComponent(parameters.page);
    if ( 'limit' in parameters )
      query = query + '&limit=' + encodeURIComponent(parameters.limit);
    ocirest.process( auth, 
                     { path : auth.RESTversion + '/userGroupMemberships/' + query,
                       host : endpoint.service.iam[auth.region],
                       method : 'GET' }, 
                     callback );
  };

  module.exports={
      list: list,
      remove: remove,
      add: add,
      get: get
  }