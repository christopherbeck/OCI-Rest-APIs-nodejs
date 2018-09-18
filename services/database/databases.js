var ocirest = require('./ocirest.js');
var endpoint = require('./endpoints.js');

function create( auth, options, callback ){
  ocirest.process( auth,
                   { path : auth.RESTversion + '/databases',
                     host : endpoint.service.database[auth.region],
                     method : 'POST',
                     body : options }, 
                   callback );
}

function update( auth, dbOCID, options, callback ) {
  ocirest.process( auth,
                   { path: auth.RESTversion + '/autonomousDatabases/' + encodeURIComponent(dbOCID),
                     host : endpoint.service.database[auth.region],
                     method : 'PUT',
                     body : options },
                   callback );
};

function restore( auth, dbOCID, options, callback ) {
  ocirest.process( auth,
                    { path: auth.RESTversion + '/autonomousDatabases/' + encodeURIComponent(dbOCID) + '/actions/restore',
                     host : endpoint.service.database[auth.region],
                     method : 'PUT',
                     body : options },
                   callback );
};


function start( auth, dbOCID, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/autonomousDatabases/' + encodeURIComponent(dbOCID) + '/actions/start',
                     host : endpoint.service.database[auth.region],
                     method : 'POST' },
                    callback );
};

function stop( auth, dbOCID, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/autonomousDatabases/' + encodeURIComponent(dbOCID) + '/actions/stop',
                     host : endpoint.service.database[auth.region],
                     method : 'POST' },
                    callback );
};

function get( auth, dbOCID, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/autonomousDatabases/' + encodeURIComponent(dbOCID),
                     host : endpoint.service.database[auth.region],
                     method : 'POST' },
                    callback );
};

function drop( auth, dbOCID, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/autonomousDatabases/' + encodeURIComponent(dbOCID),
                     host : endpoint.service.database[auth.region],
                     method : 'DELETE' },
                    callback );
};

function list( auth, compartmentId, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/autonomousDatabases?' + 'compartmentId=' + encodeURIComponent(compartmentId),
                     host : endpoint.service.database[auth.region],
                     method : 'GET' },
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
