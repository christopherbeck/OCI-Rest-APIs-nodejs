var headers = require('./headers.js');
var auth = require('./auth.js');
var regions = require('./regions.js');
var https = require('https');
var ocirest = require('./ocirest.js');

function executeRequest( options, callback ){

  var requestOptions = {};

  requestOptions.host = regions.dbAshburnRegion;
  requestOptions.path = options.path;
  requestOptions.method = options.method;
  requestOptions.headers = { "Content-Type": "application/json" };

  request = https.request(
              requestOptions, 
              headers.handleResponse(callback));

  headers.sign( request, options.body );

  request.write();
  request.end();
}

function update(options, callback) {

    var OCIoptions = {};
    /*
        host: regions.dbAshburnRegion,
        path: path,
        method: 'PUT',
        headers: { "Content-Type": "application/json" }
    };
    */

    OCIoptions.method = 'PUT';
    OCIoptions.path = auth.RESTversion + '/autonomousDatabases/' + options.dbOCID;
    if ( OCIoptions.adminPassword !== undefined )
      OCIoptions.body = '{"admninPassword":"' + options.admninPassword + '"}';
    if ( OCIoptions.adminPassword !== undefined )
      OCIoptions.body = '{"cpuCoreCount":"' + options.cpuCoreCount + '"}';
    if ( OCIoptions.adminPassword !== undefined )
      OCIoptions.body = '{"dataStorageSizeInTBs":"' + options.dataStorageSizeInTBs + '"}';
    if ( OCIoptions.adminPassword !== undefined )
      OCIoptions.body = '{"definedTags":"' + options.definedTags + '"}';
    if ( OCIoptions.displayName !== undefined )
      OCIoptions.body = '{"displayName":"' + options.displayName + '"}';
    if ( OCIoptions.adminPassword !== undefined )
      OCIoptions.body = '{"freeformTags":"' + options.freeformTags + '"}';

    ocirest.process( OCIoptions, callback );
};

function start(dbOCID, callback) {

    var path = 
      auth.RESTversion + 
      '/autonomousDatabases/' + encodeURIComponent(dbOCID) + 
      '/actions/start'

    var options = {
        host: regions.dbAshburnRegion,
        path: path,
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        }
    };

    executeRequest( options, callback );
};


function stop(dbOCID, callback) {

    var path = 
      auth.RESTversion + 
      '/autonomousDatabases/' + dbOCID + 
      '/actions/stop'


    var options = {
        host: regions.dbAshburnRegion,
        path: path,
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        }
    };

    executeRequest( options, callback );
};

function list(compartmentId, callback) {

    var path = 
      auth.RESTversion + 
      '/autonomousDatabases?' + 
      'compartmentId=' + compartmentId;

    var options = {
        host: regions.dbAshburnRegion,
        path: path,
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        }
    };

    executeRequest( options, callback );
};

module.exports = {
    list: list,
    start: start,
    stop: stop,
    update: update
    };
