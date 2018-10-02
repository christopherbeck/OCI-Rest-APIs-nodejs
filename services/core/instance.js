var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function terminate( auth, parameters, callback ) {
    var query = '';
    if ( 'availabilityDomain' in parameters )
      query = query + '?preserveBootVolume=' + encodeURIComponent(parameters.preserveBootVolume);
    ocirest.process( auth,
                     { path : auth.RESTversion + 
                      '/instances' + encodeURIComponent(parameters.instanceId) + query,
                       host : endpoint.service.core[auth.region],
                       method : 'DELETE',
                       'if-match' : parameters['if-match'] },
                      callback )
  };

function action( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + 
                              '/instances/' + encodeURIComponent(parameters.instanceId) +
                              '?action=' + encodeURIComponent(parameters.action),
                       host : endpoint.service.core[auth.region],
                       method : 'POST',
                       'if-match' : parameters['if-match'],
                       'opc-retry-token' : parameters['opc-retry-token'] },
                      callback )
  };

function launch( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + '/instances/',
                       host : endpoint.service.core[auth.region],
                       method : 'POST',
                       body : parameters.body,
                       'opc-retry-token' : parameters['opc-retry-token'] },
                      callback )
  };


function get( auth, parameters, callback ) {
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                              '/instances/' + encodeURIComponent(parameters.instanceId),
                       host : endpoint.service.core[auth.region],
                       method : 'GET' }, 
                     callback );
  };

function list( auth, parameters, callback ) {
    var query = '';
    query = '?compartmentId=' + encodeURIComponent(parameters.compartmentId);
    if ( 'availabilityDomain' in parameters )
      query = query + '&availabilityDomain=' + encodeURIComponent(parameters.availabilityDomain);
    if ( 'page' in parameters )
      query = query + '&page=' + encodeURIComponent(parameters.page);
    if ( 'displayName' in parameters )
      query = query + '&displayName=' + encodeURIComponent(parameters.displayName);
    if ( 'sortBy' in parameters )
      query = query + '&sortBy=' + encodeURIComponent(parameters.sortBy);
    if ( 'sortOrder' in parameters )
      query = query + '&sortOrder=' + encodeURIComponent(parameters.sortOrder);
    if ( 'lifecycleState' in parameters )
      query = query + '&lifecycleState=' + encodeURIComponent(parameters.lifecycleState);
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                      '/instances/' + query,
                       host : endpoint.service.core[auth.region],
                       method : 'GET' }, 
                     callback );
  };

function update( auth, parameters, callback ) {
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                              '/instances/' + encodeURIComponent(parameters.instanceId),
                       host : endpoint.service.core[auth.region],
                       'if-match' : parameters['if-match'],
                       'opc-retry-token' : parameters['opc-retry-token'],
                       body : parameters.body,
                       method : 'PUT' }, 
                     callback );
  };
  
  module.exports={
      list: list,
      terminate: terminate,
      update: update,
      launch: launch,
      get: get,
      action: action
  }