var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function get( auth, callback ){
  ocirest.process( auth,
                   { path : '/n/',
                     host : endpoint.service.objectStore[auth.region],
                     method : 'GET' },
                   callback );
}

module.exports = {
    get: get
}