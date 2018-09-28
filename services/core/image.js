var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function create( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + '/images',
                       host : endpoint.service.core[auth.region],
                       method : 'POST',
                       body : parameters.body,
                       'opc-retry-token' : parameters['opc-retry-token'] },
                      callback )
  };

function drop( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + 
                      '/images/' + encodeURIComponent(parameters.imageId),
                       host : endpoint.service.core[auth.region],
                       method : 'DELETE',
                       'if-match' : parameters['if-match'] },
                      callback )
  };

function exportImage( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + 
                              '/images/' + encodeURIComponent(parameters.imageId) +
                              '/actions/export',
                       host : endpoint.service.core[auth.region],
                       method : 'POST',
                       body : parameters.body,
                       'if-match' : parameters['if-match'],
                       'opc-retry-token' : parameters['opc-retry-token'] },
                      callback )
  };

function get( auth, parameters, callback ) {
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                              '/images/' + encodeURIComponent(parameters.imageId),
                       host : endpoint.service.core[auth.region],
                       method : 'GET' }, 
                     callback );
  };

function list( auth, parameters, callback ) {
    var query = '';
    query = '?compartmentId=' + encodeURIComponent(parameters.compartmentId);
    if ( 'page' in parameters )
      query = query + '&page=' + encodeURIComponent(parameters.page);
    if ( 'displayName' in parameters )
      query = query + '&displayName=' + encodeURIComponent(parameters.displayName);
    if ( 'operatingSystem' in parameters )
      query = query + '&operatingSystem=' + encodeURIComponent(parameters.operatingSystem);
    if ( 'operatingSystemVersion' in parameters )
      query = query + '&operatingSystemVersion=' + encodeURIComponent(parameters.operatingSystemVersion);
    if ( 'shape' in parameters )
      query = query + '&shape=' + encodeURIComponent(parameters.shape);
    if ( 'sortBy' in parameters )
      query = query + '&sortBy=' + encodeURIComponent(parameters.sortBy);
    if ( 'sortOrder' in parameters )
      query = query + '&sortOrder=' + encodeURIComponent(parameters.sortOrder);
    if ( 'lifecycleState' in parameters )
      query = query + '&lifecycleState=' + encodeURIComponent(parameters.lifecycleState);
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                      '/images' + query,
                       host : endpoint.service.core[auth.region],
                       method : 'GET' }, 
                     callback );
  };

function update( auth, parameters, callback ) {
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                              '/images/' + encodeURIComponent(parameters.imageId),
                       host : endpoint.service.core[auth.region],
                       'if-match' : parameters['if-match'],
                       'opc-retry-token' : parameters['opc-retry-token'],
                       body : parameters.body,
                       method : 'PUT' }, 
                     callback );
  };
  
  module.exports={
      list: list,
      drop: drop,
      update: update,
      create: create,
      get: get,
      exportImage: exportImage
  }