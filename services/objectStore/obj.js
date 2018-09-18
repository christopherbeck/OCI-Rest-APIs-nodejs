var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function list( auth, namespaceName, bucketName, options, callback ){
  ocirest.process( auth,
                   { path : '/n/' + encodeURIComponent(namespaceName) + '/b/' + encodeURIComponent(bucketName) + '/o',
                     host : endpoint.service.objectStore[auth.region],
                     method : 'GET' },
                   callback );
}

module.exports = {
    list: list
}