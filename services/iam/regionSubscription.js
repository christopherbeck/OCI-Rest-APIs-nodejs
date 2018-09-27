var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function create( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + 
                              '/tenancies/' + encodeURIComponent(parameters.tenancyId) +
                              '/regionSubscriptions',
                       host : endpoint.service.iam[auth.region],
                       method : 'POST',
                       body : parameters.body,
                       'opc-retry-token' : parameters['opc-retry-token'] },
                      callback )
  };

function list( auth, parameters, callback ) {
    ocirest.process( auth, 
                     { path : auth.RESTversion + 
                              '/tenancies/' + encodeURIComponent(parameters.tenancyId) +
                              '/regionSubscriptions',
                       host : endpoint.service.iam[auth.region],
                       method : 'GET' }, 
                     callback );
  };

  module.exports={
      list: list,
      create: create
  }