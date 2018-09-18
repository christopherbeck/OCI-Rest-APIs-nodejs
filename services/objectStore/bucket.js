var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function create( auth, namespaceName, options, callback ){
  ocirest.process( auth,
                   { path : '/n/' +  encodeURIComponent(namespaceName) + '/b/',
                     host : endpoint.service.objectStore[auth.region],
                     method : 'POST',
                     body : options }, 
                   callback );
}

function update( auth, namespaceName, bucketName, options, callback ) {
  ocirest.process( auth,
                   { path : '/n/' +  encodeURIComponent(namespaceName) + '/b/' + encodeURIComponent(bucketName) + '/',
                     host : endpoint.service.objectStore[auth.region],
                     method : 'POST',
                     body : options },
                   callback );
};

function get( auth, namespaceName, bucketName, callback ) {
  ocirest.process( auth,
                   { path : '/n/' +  encodeURIComponent(namespaceName) + '/b/' + encodeURIComponent(bucketName) + '/',
                     host : endpoint.service.objectStore[auth.region],
                     method : 'GET' },
                    callback );
};

function head( auth, namespaceName, bucketName, callback ) {
  ocirest.process( auth,
                   { path : '/n/' +  encodeURIComponent(namespaceName) + '/b/' + encodeURIComponent(bucketName) + '/',
                     host : endpoint.service.objectStore[auth.region],
                     method : 'HEAD' },
                    callback );
};


function drop( auth, namespaceName, bucketName, callback ) {
  ocirest.process( auth,
                   { path : '/n/' +  encodeURIComponent(namespaceName) + '/b/' + encodeURIComponent(bucketName) + '/',
                     host : endpoint.service.objectStore[auth.region],
                     method : 'DELETE' },
                    callback );
};

function list( auth, namespaceName, options, callback ) {
  var path = '';
  if ( 'compartmentId' in options )
    path = path + 'compartmentId=' + encodeURIComponent( options.compartmentId );

  if ( 'limit' in options )
    path = path + '&limit=' + encodeURIComponent( options.limit );

  if ( 'page' in options )
    path = path + '&page=' + encodeURIComponent( options.page );

  if ( 'fields' in options )
    path = path + '&sortBy=' + encodeURIComponent( options.fields );

  ocirest.process( auth,
                   { path : '/n/' +  encodeURIComponent(namespaceName) + '/b/?' + path,
                     host : endpoint.service.objectStore[auth.region],
                     method : 'GET' },
                    callback );
};

module.exports = {
    list: list,
    update: update,
    get: get,
    create: create,
    head: head,
    drop: drop
    };
