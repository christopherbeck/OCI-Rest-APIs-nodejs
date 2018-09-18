var ocirest = require('./ocirest.js');

function create( auth, options, callback ){
  ocirest.process( auth,
                   { path : auth.RESTversion + '/autonomousDataWarehouses',
                     method : 'POST',
                     body : options }, 
                   callback );
}

function update( auth, dbOCID, options, callback ) {
  ocirest.process( auth,
                   { path: auth.RESTversion + '/autonomousDataWarehouses/' + encodeURIComponent(dbOCID),
                     method : 'PUT',
                     body : options },
                   callback );
};

function restore( auth, dbOCID, options, callback ) {
  ocirest.process( auth,
                    { path: auth.RESTversion + '/autonomousDataWarehouses/' + encodeURIComponent(dbOCID) + '/actions/restore',
                     method : 'PUT',
                     body : options },
                   callback );
};


function start( auth, dbOCID, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/autonomousDataWarehouses/' + encodeURIComponent(dbOCID) + '/actions/start',
                     method : 'POST' },
                    callback );
};

function stop( auth, dbOCID, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/autonomousDataWarehouses/' + encodeURIComponent(dbOCID) + '/actions/stop',
                     method : 'POST' },
                    callback );
};

function get( auth, dbOCID, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/autonomousDataWarehouses/' + encodeURIComponent(dbOCID),
                     method : 'POST' },
                    callback );
};

function drop( auth, dbOCID, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/autonomousDataWarehouses/' + encodeURIComponent(dbOCID),
                     method : 'DELETE' },
                    callback );
};

function list( auth, compartmentId, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/autonomousDataWarehouses?' + 'compartmentId=' + encodeURIComponent(compartmentId),
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
