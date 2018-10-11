var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');


function list( auth, parameters, callback ){
  var query = '';
  if ( 'prefix' in parameters )
    query = query + (query==''?'?':'&') + 'prefix=' + encodeURIComponent(parameters.prefix);
  if ( 'start' in parameters )
    query = query + (query==''?'?':'&') + 'start=' + encodeURIComponent(parameters.start);
  if ( 'end' in parameters )
    query = query + (query==''?'?':'&') + 'end=' + encodeURIComponent(parameters.end);
  if ( 'limit' in parameters )
    query = query + (query==''?'?':'&') + 'limit=' + encodeURIComponent(parameters.limit);
  if ( 'delimiter' in parameters )
    query = query + (query==''?'?':'&') + 'delimiter=' + encodeURIComponent(parameters.delimiter);
  if ( 'fields' in parameters )
    query = query + (query==''?'?':'&') + 'fields=' + encodeURIComponent(parameters.fields);

  ocirest.process( auth,
                   { path : '/n/' + encodeURIComponent(parameters.namespaceName) + 
                            '/b/' + encodeURIComponent(parameters.bucketName) + 
                            '/o' +
                            query,
                     host : endpoint.service.objectStore[auth.region],
                     'opc-client-request-id' : parameters['opc-client-request-id'],
                     method : 'GET' },
                   callback );
}

function listMultipart( auth, parameters, callback ){
  var query = '';
  if ( 'limit' in parameters )
    query = query + (query==''?'?':'&') + 'limit=' + encodeURIComponent(parameters.limit);
  if ( 'page' in parameters )
    query = query + (query==''?'?':'&') + 'page=' + encodeURIComponent(parameters.page);

  ocirest.process( auth,
                   { path : '/n/' + encodeURIComponent(parameters.namespaceName) + 
                            '/b/' + encodeURIComponent(parameters.bucketName) + 
                            '/u' +
                            query,
                     host : endpoint.service.objectStore[auth.region],
                     'opc-client-request-id' : parameters['opc-client-request-id'],
                     method : 'GET' },
                   callback );
}

function abortMultipart( auth, parameters, callback ){
  var query = '';
  query = query + '?uploadId=' + encodeURIComponent(parameters.uploadId);
  ocirest.process( auth,
                   { path : '/n/' + encodeURIComponent(parameters.namespaceName) + 
                            '/b/' + encodeURIComponent(parameters.bucketName) + 
                            '/u/' + encodeURIComponent(parameters.objectName) +
                            query,
                     host : endpoint.service.objectStore[auth.region],
                     'opc-client-request-id' : parameters['opc-client-request-id'],
                     method : 'DELETE' },
                   callback );
}



function get( auth, parameters, callback ){
  ocirest.process( auth,
                   { path : '/n/' + encodeURIComponent(parameters.namespaceName) + 
                            '/b/' + encodeURIComponent(parameters.bucketName) +
                            '/o/' + encodeURIComponent(parameters.objectName),
                     host : endpoint.service.objectStore[auth.region],
                     'opc-client-request-id' : parameters['opc-client-request-id'],
                     'if-match' : parameters['if-match'],
                     'if-none-match' : parameters['if-none-match'],
                     range : parameters.range,
                     method : 'GET' },
                   callback );
}

function head( auth, parameters, callback ){
  ocirest.process( auth,
                   { path : '/n/' + encodeURIComponent(parameters.namespaceName) + 
                            '/b/' + encodeURIComponent(parameters.bucketName) +
                            '/o/' + encodeURIComponent(parameters.objectName),
                     host : endpoint.service.objectStore[auth.region],
                     'opc-client-request-id' : parameters['opc-client-request-id'],
                     'if-match' : parameters['if-match'],
                     'if-none-match' : parameters['if-none-match'],
                     method : 'HEAD' },
                   callback );
}

function rename( auth, parameters, callback ){
  ocirest.process( auth,
                   { path : '/n/' + encodeURIComponent(parameters.namespaceName) + 
                            '/b/' + encodeURIComponent(parameters.bucketName) + 
                            '/actions/renameObject',
                     host : endpoint.service.objectStore[auth.region],
                     'opc-client-request-id' : parameters['opc-client-request-id'],
                     method : 'POST',
                     body : parameters.body },
                   callback );
}

function restore( auth, parameters, callback ){
  ocirest.process( auth,
                   { path : '/n/' + encodeURIComponent(parameters.namespaceName) + 
                            '/b/' + encodeURIComponent(parameters.bucketName) + 
                            '/actions/restoreObjects',
                     host : endpoint.service.objectStore[auth.region],
                     'opc-client-request-id' : parameters['opc-client-request-id'],
                     method : 'POST',
                     body : parameters.body },
                   callback );
}


function drop( auth, parameters, callback ){
  ocirest.process( auth,
                   { path : '/n/' + encodeURIComponent(parameters.namespaceName) + 
                            '/b/' + encodeURIComponent(parameters.bucketName) + 
                            '/o/' + encodeURIComponent(parameters.objectName),
                     host : endpoint.service.objectStore[auth.region],
                     'opc-client-request-id' : parameters['opc-client-request-id'],
                     'if-match' : parameters['if-match'],
                     method : 'DELETE' },
                   callback );
}

function createMultipartUpload( auth, parameters, callback )
{
  ocirest.process( auth,
    { path : '/n/' + encodeURIComponent(parameters.namespaceName) + 
             '/b/' + encodeURIComponent(parameters.bucketName) + 
             '/u',
      host : endpoint.service.objectStore[auth.region],
      'if-match' : parameters['if-match'],
      'if-none-match' : parameters['if-match-none'],
      'opc-client-request-id' : parameters['opc-client-request-id'],
      body : parameters.body,
      method : 'POST' },
    callback );
}

function uploadPart( auth, parameters, callback )
{
  var query = '';
  query = query + '?uploadId=' + encodeURIComponent(parameters.uploadId);
  query = query + '&uploadPartNum=' + encodeURIComponent(parameters.uploadPartNum);
  ocirest.process( auth,
    { path : '/n/' + encodeURIComponent(parameters.namespaceName) + 
             '/b/' + encodeURIComponent(parameters.bucketName) + 
             '/u/' + encodeURIComponent(parameters.objectName) + query,
      host : endpoint.service.objectStore[auth.region],
      'opc-client-request-id' : parameters['opc-client-request-id'],
      'if-none-match' : parameters['if-none-match'],
      'if-match' : parameters['if-match'],
      'Expect' : parameters.Expect,
      'Content-MD5' : parameters['Content-MD5'],
      method : 'PUT',
      uploadFile: true,
      body : parameters.body },
      callback );
}

function listMultipartUploadParts( auth, parameters, callback ){
  var query = '';
  query = query + '?uploadId=' + encodeURIComponent(parameters.uploadId);
  if ( 'limit' in parameters )
    query = query + (query==''?'?':'&') + 'limit=' + encodeURIComponent(parameters.limit);
  if ( 'page' in parameters )
    query = query + (query==''?'?':'&') + 'page=' + encodeURIComponent(parameters.page);
  ocirest.process( auth,
                   { path : '/n/' + encodeURIComponent(parameters.namespaceName) + 
                            '/b/' + encodeURIComponent(parameters.bucketName) + 
                            '/u/' + encodeURIComponent(parameters.objectName) + query,
                     host : endpoint.service.objectStore[auth.region],
                     'opc-client-request-id' : parameters['opc-client-request-id'],
                     method : 'GET' },
                   callback ); 
}


function commitMultipartUpload( auth, parameters, callback ){
  var query = '';
  query = query + '?uploadId=' + encodeURIComponent(parameters.uploadId);
   ocirest.process( auth,
     { path : '/n/' + encodeURIComponent(parameters.namespaceName) + 
              '/b/' + encodeURIComponent(parameters.bucketName) + 
              '/u/' + encodeURIComponent(parameters.objectName) + query,
       host : endpoint.service.objectStore[auth.region],
       'opc-client-request-id' : parameters['opc-client-request-id'],
       'if-match' : parameters['if-match'],
       'if-none-match' : parameters['if-none-match'],
       method : 'POST',
       body : parameters.body },
     callback );  
}

function copy( auth, parameters, callback ){
  ocirest.process( auth,
    { path : '/n/' + encodeURIComponent(parameters.namespaceName) + 
             '/b/' + encodeURIComponent(parameters.bucketName) + 
             '/actions/copyObject',
      host : endpoint.service.objectStore[auth.region],
      'opc-client-request-id' : parameters['opc-client-request-id'],
      body : parameters.body,
      method : 'POST' },
    callback ); 
}

function put( auth, parameters, callback ){
  var fs = require('fs');
  var buffer = fs.readFileSync(parameters.fileName);
  ocirest.process( auth,
                   { path : '/n/' + encodeURIComponent(parameters.namespaceName) + 
                            '/b/' + encodeURIComponent(parameters.bucketName) + 
                            '/o/' + encodeURIComponent(parameters.objectName) ,
                     host : endpoint.service.objectStore[auth.region],
                     'opc-client-request-id' : parameters['opc-client-request-id'],
                     body : buffer,
                     uploadFile: true,
                     method : 'PUT' },
                   callback ); 
}



module.exports = {
    list: list,
    listMultipart: listMultipart,
    abortMultipart: abortMultipart,
    createMultipartUpload: createMultipartUpload,
    uploadPart: uploadPart,
    listMultipartUploadParts: listMultipartUploadParts,
    commitMultipartUpload: commitMultipartUpload,
    get: get,
    head: head,
    rename: rename,
    restore: restore,
    drop: drop,
    put: put,
    copy: copy
}