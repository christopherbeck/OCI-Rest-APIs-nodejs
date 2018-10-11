var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function create( auth, parameters, callback ){
  ocirest.process( auth,
                   { path : auth.RESTversion + 
                            '/loadBalancers/' + encodeURIComponent(parameters.loadBalancerId) +
                            '/certificates',
                     host : endpoint.service.loadBalance[auth.region],
                     method : 'POST',
                     'opc-retry-token' : parameters['opc-retry-token'],
                     'opc-request-id' : parameters['opc-request-id'],
                     body : parameters.body }, 
                   callback );
}

function drop( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + 
                            '/loadBalancers/' + encodeURIComponent(parameters.loadBalancerId) +
                            '/certificates/' + encodeURIComponent(parameters.certificateName),
                     host : endpoint.service.loadBalance[auth.region],
                     'opc-request-id' : parameters['opc-request-id'],
                     method : 'DELETE' },
                    callback );
};

function list( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + 
                            '/loadBalancers/' + encodeURIComponent(parameters.loadBalancerId) +
                            '/certificates',
                     host : endpoint.service.loadBalance[auth.region],
                     'opc-request-id' : parameters['opc-request-id'],
                     method : 'GET' },
                    callback );
};

module.exports = {
    list: list,
    create: create,
    drop: drop
    };
