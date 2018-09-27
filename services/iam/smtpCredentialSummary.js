var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function list( auth, parameters, callback ) {
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                              '/users/' + encodeURIComponent(parameters.userId) +
                              '/smtpCredentials/',
                       host : endpoint.service.iam[auth.region],
                       method : 'GET' }, 
                     callback );
  };

function update( auth, parameters, callback ) {
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                              '/users/' + encodeURIComponent(parameters.userId) +
                              '/smtpCredentials/' + encodeURIComponent(parameters.smtpCredentialId),
                       host : endpoint.service.iam[auth.region],
                       'if-match' : parameters['if-match'],
                       body : parameters.body,
                       method : 'PUT' }, 
                     callback );
  };
  
  module.exports={
      list: list,
      update: update
  }