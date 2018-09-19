var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');


function create( auth, parameters, callback ){
  ocirest.process( auth,
                   { 'path' : auth.RESTversion + '/autonomousDataWarehouses',
                     'host' : endpoint.service.database[auth.region],
                     'method' : 'POST',
                     'opc-retry-token' :  parameters['opc-retry-token'],
                     'body' : parameters.body }, 
                   callback );
}

function drop( auth, parameters, callback ) {
  ocirest.process( auth,
                   { 'path' : auth.RESTversion + '/autonomousDataWarehouses/' + encodeURIComponent(parameters.autonomousDataWarehouseId),
                     'host' : endpoint.service.database[auth.region],
                     'method' : 'DELETE',
                     'if-match' : parameters['if-match'] },
                    callback )
};

function get( auth, parameters, callback ) {
  ocirest.process( auth,
                   { 'path' : auth.RESTversion + '/autonomousDataWarehouses/' + encodeURIComponent(parameters.autonomousDataWarehouseId),
                     'host' : endpoint.service.database[auth.region],
                     'method' : 'POST' },
                    callback );
};

function list( auth, parameters, callback ) {
  var path = '';
  path = path + '?compartmentId=' + encodeURIComponent(parameters.compartmentId);
  if ( parameters.limit !== undefined )
    path = path + '&limit=' + encodeURIComponent(parameters.limit);
  if ( parameters.page !== undefined )
    path = path + '&page=' + encodeURIComponent(parameters.page);
  if ( parameters.sortBy !== undefined )
    path = path + '&sortBy=' + encodeURIComponent(parameters.sortBy);
  if ( parameters.sortOrder !== undefined )
    path = path + '&sortOrder=' + encodeURIComponent(parameters.sortOrder);
  if ( parameters.lifecycleState !== undefined )
    path = path + '&lifecycleState=' + encodeURIComponent(parameters.lifecycleState);
  if ( parameters.displayName !== undefined )
    path = path + '&displayName=' + encodeURIComponent(parameters.displayName);

  headers = { 'path' : auth.RESTversion + '/autonomousDataWarehouses' + path,
              'host' : endpoint.service.database[auth.region],
              'method' : 'GET',
              'content-type' : 'application/json' };
  ocirest.process( auth, headers, callback );
};

function restore( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path: auth.RESTversion + '/autonomousDataWarehouses/' + encodeURIComponent(parameters.autonomousDataWarehouseId) + '/actions/restore',
                     host : endpoint.service.database[auth.region],
                     method : 'PUT',
                    'if-match' : parameters['if-match'],
                     body : parameters.body },
                   callback );
};

function start( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/autonomousDataWarehouses/' + encodeURIComponent(parameters.autonomousDataWarehouseId) + '/actions/start',
                     host : endpoint.service.database[auth.region],
                    'if-match' : parameters['if-match'],
                     method : 'POST' },
                    callback );
};

function stop( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/autonomousDataWarehouses/' + encodeURIComponent(parameters.autonomousDataWarehouseId) + '/actions/stop',
                    'if-match' : parameters['if-match'],
                     host : endpoint.service.database[auth.region],
                     method : 'POST' },
                    callback );
};

function update( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path: auth.RESTversion + '/autonomousDataWarehouses/' + encodeURIComponent(parameters.autonomousDataWarehouseId),
                     host : endpoint.service.database[auth.region],
                     method : 'PUT',
                    'if-match' : parameters['if-match'],
                     body : parameters.body },
                   callback );
};

module.exports = {
    list: list,
    start: start,
    stop: stop,
    update: update,
    get: get,
    create: create,
    restore: restore,
    drop: drop
    };
