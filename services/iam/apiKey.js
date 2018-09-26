var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function drop( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + 
                              '/users/' + encodeURIComponent(parameters.userId) +
                              '/apiKeys/' + encodeURIComponent(parameters.fingerprint),
                       host : endpoint.service.iam[auth.region],
                       method : 'DELETE',
                       'if-match' : parameters['if-match'] },
                      callback )
  };

function list( auth, parameters, callback ) {
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                              '/users/' + encodeURIComponent(parameters.userId) +
                              '/apiKeys/',
                       host : endpoint.service.iam[auth.region],
                       method : 'GET' }, 
                     callback );
  };

function upload( auth, parameters, callback ) {
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                              '/users/' + encodeURIComponent(parameters.userId) +
                              '/apiKeys/',
                       host : endpoint.service.iam[auth.region],
                       'opc-retry-token' : parameters['opc-retry-token'],
                       body : parameters.body,
                       method : 'POST' }, 
                     callback );
  };


  
  module.exports={
      list: list,
      drop: drop,
      upload: upload
  }