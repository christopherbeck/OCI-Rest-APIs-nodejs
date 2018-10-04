var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function create( auth, parameters, callback ){
  var query = '';
  query = query + '?compartmentId=' + encodeURIComponent( parameters.compartmentId);
  ocirest.process( auth,
                   { path : auth.RESTversion + '/zones' + query,
                     host : endpoint.service.dns[auth.region],
                     method : 'POST',
                     body : options }, 
                   callback );
}

function update( auth, parameters, callback ) {
  var query = '';
  query = query + '?compartmentId=' + encodeURIComponent( parameters.compartmentId);
  ocirest.process( auth,
                   { path : auth.RESTversion + '/zones/' + encodeURIComponent(parameters.zoneNameOrId),
                     host : endpoint.service.dns[auth.region],
                     method : 'PUT',
                     'If-Match' : parameters['If-Match'],
                     'if-Unmodified-Since' : parameters['if-Unmodified-Since'],
                     body : options },
                   callback );
};

function get( auth, parameters, callback ) {
  var query = '';
  query = query + '?compartmentId=' + encodeURIComponent( parameters.compartmentId);
  ocirest.process( auth,
                   { path : auth.RESTversion + '/zones/' + encodeURIComponent(parameters.zoneNameOrId),
                     host : endpoint.service.dns[auth.region],
                     'If-Match' : parameters['If-Match'],
                     'if-Unmodified-Since' : parameters['if-Unmodified-Since'],
                     method : 'GET' },
                    callback );
};

function drop( auth, parameters, callback ) {
  var query = '';
  query = query + '?compartmentId=' + encodeURIComponent( parameters.compartmentId);
  ocirest.process( auth,
                   { path : auth.RESTversion + '/zones/' + encodeURIComponent(parameters.zoneNameOrId) + query,
                     host : endpoint.service.dns[auth.region],
                     'If-Match' : parameters['If-Match'],
                     'if-Unmodified-Since' : parameters['if-Unmodified-Since'],
                     method : 'DELETE' },
                    callback );
};

function list( auth, parameters, callback ) {
  var query = '';
  query = query + '?compartmentId=' + encodeURIComponent( parameters.compartmentId);
  if ( 'limit' in parameters )
    query = query + '&limit=' + encodeURIComponent( parameters.limit );
  if ( 'page' in parameters )
    query = query + '&page=' + encodeURIComponent( parameters.page );
  if ( 'name' in parameters )
    query = query + '&name=' + encodeURIComponent( parameters.name );
  if ( 'nameContains' in parameters )
    query = query + '&nameContains=' + encodeURIComponent( parameters.nameContains );
  if ( 'zoneType' in parameters )
    query = query + '&zoneType=' + encodeURIComponent( parameters.zoneType );
  if ( 'timeCreatedGreaterThanOrEqualTo' in parameters )
    query = query + '&timeCreatedGreaterThanOrEqualTo=' + encodeURIComponent( parameters.timeCreatedGreaterThanOrEqualTo );
  if ( 'timeCreatedLessThan' in parameters )
    query = query + '&timeCreatedLessThan=' + encodeURIComponent( parameters.timeCreatedLessThan );
  if ( 'sortBy' in parameters )
    query = query + '&sortBy=' + encodeURIComponent( parameters.sortBy );
  if ( 'sortOrder' in parameters )
    query = query + '&sortOrder=' + encodeURIComponent( parameters.sortOrder );
  if ( 'lifecycleState' in parameters )
    query = query + '&lifecycleState=' + encodeURIComponent( parameters.lifecycleState );

  ocirest.process( auth,
                   { path : auth.RESTversion + '/zones' +
                            query,
                     host : endpoint.service.dns[auth.region],
                     method : 'GET' },
                    callback );
};

module.exports = {
    list: list,
    update: update,
    get: get,
    create: create,
    drop: drop
    };
