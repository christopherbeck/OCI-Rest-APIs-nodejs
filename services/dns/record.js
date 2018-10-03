var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');


function updateDomain( auth, parameters, callback ) {
  var query = '';
  if ( 'compartmentId' in parameters )
    query = query + '?compartmentId=' + encodeURIComponent( parameters.compartmentId );
  ocirest.process( auth,
                   { path : auth.RESTversion + 
                            '/zones/' + encodeURIComponent(parameters.zoneNameOrId) +
                            '/records/' + encodeURIComponent(parameters.domain) +
                            query,
                     host : endpoint.service.dns[auth.region],
                     method : 'PUT',
                     'If-Match' : parameters['If-Match'],
                     'If-Unmodified-Since' : parameters['If-Unmodified-Since'],
                     body : parameters.body },
                   callback );
};

function updateZone( auth, parameters, callback ) {
  var query = '';
  if ( 'compartmentId' in parameters )
    query = query + '?compartmentId=' + encodeURIComponent( parameters.compartmentId );
  ocirest.process( auth,
                   { path : auth.RESTversion + 
                            '/zones/' + encodeURIComponent(parameters.zoneNameOrId) +
                            '/records' + query,
                     host : endpoint.service.dns[auth.region],
                     method : 'PUT',
                     'If-Match' : parameters['If-Match'],
                     'If-Unmodified-Since' : parameters['If-Unmodified-Since'],
                     body : parameters.body },
                   callback );
};


function getDomain( auth, parameters, callback ) {
  var query = '';
  if ( 'limit' in parameters )
    query = query + (query==''?'?':'&') + 'limit=' + encodeURIComponent( parameters.limit );
  if ( 'page' in parameters )
    query = query + (query==''?'?':'&') + 'page=' + encodeURIComponent( parameters.page );
  if ( 'zoneVersion' in parameters )
    query = query + (query==''?'?':'&') + 'zoneVersion=' + encodeURIComponent( parameters.zoneVersion );
  if ( 'domain' in parameters )
    query = query + (query==''?'?':'&') + 'domain=' + encodeURIComponent( parameters.domain );
  if ( 'domainContains' in parameters )
    query = query + (query==''?'?':'&') + 'domainContains=' + encodeURIComponent( parameters.domainContains );
  if ( 'rtype' in parameters )
    query = query + (query==''?'?':'&') + 'rtype=' + encodeURIComponent( parameters.rtype );
  if ( 'sortBy' in parameters )
    query = query + (query==''?'?':'&') + 'sortBy=' + encodeURIComponent( parameters.sortBy );
  if ( 'sortOrder' in parameters )
    query = query + (query==''?'?':'&') + 'sortOrder=' + encodeURIComponent( parameters.sortOrder );
  if ( 'compartmentId' in parameters )
    query = query + (query==''?'?':'&') + 'compartmentId=' + encodeURIComponent( parameters.compartmentId );
  ocirest.process( auth,
                   { path : auth.RESTversion + 
                            '/zones/' + encodeURIComponent(parameters.zoneNameOrId) +
                            '/records' + query,
                     host : endpoint.service.dns[auth.region],
                     'If-Match' : parameters['If-Match'],
                     'If-Unmodified-Since' : parameters['If-Unmodified-Since'],
                     method : 'GET' },
                    callback );
};

function getZone( auth, parameters, callback ) {
  var query = '';
  if ( 'limit' in parameters )
    query = query + (query==''?'?':'&') + 'limit=' + encodeURIComponent( parameters.limit );
  if ( 'page' in parameters )
    query = query + (query==''?'?':'&') + 'page=' + encodeURIComponent( parameters.page );
  if ( 'zoneVersion' in parameters )
    query = query + (query==''?'?':'&') + 'zoneVersion=' + encodeURIComponent( parameters.zoneVersion );
  if ( 'rtype' in parameters )
    query = query + (query==''?'?':'&') + 'rtype=' + encodeURIComponent( parameters.rtype );
  if ( 'sortBy' in parameters )
    query = query + (query==''?'?':'&') + 'sortBy=' + encodeURIComponent( parameters.sortBy );
  if ( 'sortOrder' in parameters )
    query = query + (query==''?'?':'&') + 'sortOrder=' + encodeURIComponent( parameters.sortOrder );
  if ( 'compartmentId' in parameters )
    query = query + (query==''?'?':'&') + 'compartmentId=' + encodeURIComponent( parameters.compartmentId );
  ocirest.process( auth,
                   { path : auth.RESTversion + 
                            '/zones/' + encodeURIComponent(parameters.zoneNameOrId) +
                            '/records/' + encodeURIComponent(parameters.domain) +
                            query,
                     host : endpoint.service.dns[auth.region],
                     'If-Match' : parameters['If-Match'],
                     'If-Unmodified-Since' : parameters['If-Unmodified-Since'],
                     method : 'GET' },
                    callback );
};


function patchDomain( auth, parameters, callback ) {
  var query = '';
  if ( 'compartmentId' in parameters )
    query = query + '?compartmentId=' + encodeURIComponent( parameters.compartmentId );
  ocirest.process( auth,
                   { path : auth.RESTversion + 
                            '/zones/' + encodeURIComponent(parameters.zoneNameOrId) +
                            '/records' + query,
                     host : endpoint.service.dns[auth.region],
                     'If-Match' : parameters['If-Match'],
                     'If-Unmodified-Since' : parameters['If-Unmodified-Since'],
                     body: parameters.body,
                     method : 'PATCH' },
                    callback );
};

function patchZone( auth, parameters, callback ) {
  var query = '';
  if ( 'compartmentId' in parameters )
    query = query + '?compartmentId=' + encodeURIComponent( parameters.compartmentId );
  ocirest.process( auth,
                   { path : auth.RESTversion + 
                            '/zones/' + encodeURIComponent(parameters.zoneNameOrId) +
                            '/records/' + encodeURIComponent(parameters.domain) +
                            query,
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
                            query,
                     host : endpoint.service.dns[auth.region],
                     'If-Match' : parameters['If-Match'],
                     'If-Unmodified-Since' : parameters['If-Unmodified-Since'],
                     method : 'DELETE' },
                    callback );
};

module.exports = {
    updateDomain: updateDomain,
    updateZone: updateZone,
    getDomain: getDomain,
    getZone: getZone,
    patchDomain: patchDomain,
    patchZone: patchZone,
    drop: drop
    };
