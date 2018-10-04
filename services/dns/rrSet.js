var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');


function update( auth, parameters, callback ) {
  var query = '';
  if ( 'compartmentId' in parameters )
    query = query + '?compartmentId=' + encodeURIComponent( parameters.compartmentId );
  ocirest.process( auth,
                   { path : auth.RESTversion + 
                            '/zones/' + encodeURIComponent(parameters.zoneNameOrId) +
                            '/records/' + encodeURIComponent(parameters.domain) +
                            '/' + encodeURIComponent(parameters.rtype) +
                            query,
                     host : endpoint.service.dns[auth.region],
                     method : 'PUT',
                     'If-Match' : parameters['If-Match'],
                     'If-Unmodified-Since' : parameters['If-Unmodified-Since'],
                     body : parameters.body },
                   callback );
};

function get( auth, parameters, callback ) {
  var query = '';
  if ( 'limit' in parameters )
    query = query + (query==''?'?':'&') + 'limit=' + encodeURIComponent( parameters.limit );
  if ( 'page' in parameters )
    query = query + (query==''?'?':'&') + 'page=' + encodeURIComponent( parameters.page );
  if ( 'zoneVersion' in parameters )
    query = query + (query==''?'?':'&') + 'zoneVersion=' + encodeURIComponent( parameters.zoneVersion );
  if ( 'compartmentId' in parameters )
    query = query + (query==''?'?':'&') + 'compartmentId=' + encodeURIComponent( parameters.compartmentId );
  ocirest.process( auth,
                   { path : auth.RESTversion + 
                            '/zones/' + encodeURIComponent(parameters.zoneNameOrId) +
                            '/records/' + encodeURIComponent(parameters.domain) +
                            '/' + encodeURIComponent(parameters.rtype) +
                            query,
                     host : endpoint.service.dns[auth.region],
                     'If-Match' : parameters['If-Match'],
                     'If-Unmodified-Since' : parameters['If-Unmodified-Since'],
                     method : 'GET' },
                    callback );
};

function patch( auth, parameters, callback ) {
  var query = '';
  if ( 'compartmentId' in parameters )
    query = query + '?compartmentId=' + encodeURIComponent( parameters.compartmentId );
  ocirest.process( auth,
                   { path : auth.RESTversion + 
                            '/zones/' + encodeURIComponent(parameters.zoneNameOrId) +
                            '/records/' + encodeURIComponent(parameters.domain) +
                            '/' + encodeURIComponent(parameters.rtype) + query,
                     host : endpoint.service.dns[auth.region],
                     'If-Match' : parameters['If-Match'],
                     'If-Unmodified-Since' : parameters['If-Unmodified-Since'],
                     body: parameters.body,
                     method : 'PATCH' },
                    callback );
};


function drop( auth, parameters, callback ) {
  var query = '';
  if ( 'compartmentId' in parameters )
    query = query + '?compartmentId=' + encodeURIComponent( parameters.compartmentId );
  ocirest.process( auth,
                   { path : auth.RESTversion + 
                            '/zones/' + encodeURIComponent(parameters.zoneNameOrId) +
                            '/records/' + encodeURIComponent(parameters.domain) +
                            '/' + encodeURIComponent(parameters.rtype) +
                            query,
                     host : endpoint.service.dns[auth.region],
                     'If-Match' : parameters['If-Match'],
                     'If-Unmodified-Since' : parameters['If-Unmodified-Since'],
                     method : 'DELETE' },
                    callback );
};

module.exports = {
    update: update,
    get: get,
    patch: patch,
    drop: drop
    };
