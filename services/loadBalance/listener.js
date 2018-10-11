var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function create( auth, parameters, callback ){
  ocirest.process( auth,
                   { path : auth.RESTversion + 
                            '/loadBalancers' + encodeURIComponent(parameters.loadBalancerId) +
                            '/listeners',
                     host : endpoint.service.loadBalance[auth.region],
                     method : 'POST',
                     'opc-retry-token' : parameters['opc-retry-token'],
                     'opc-request-id' : parameters['opc-request-id'],
                     body : parameters.body }, 
                   callback );
}

function update( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + 
                            '/loadBalancers/' + encodeURIComponent(parameters.loadBalancerId) +
                            '/listeners/' + encodeURIComponent(parameters.listenerName),
                     host : endpoint.service.loadBalance[auth.region],
                     method : 'PUT',
                     'opc-retry-token' : parameters['opc-retry-token'],
                     'opc-request-id' : parameters['opc-request-id'],
                     body : parameters.body },
                   callback );
};

function drop( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + 
                            '/loadBalancers/' + encodeURIComponent(parameters.loadBalancerId) +
                            '/listeners/' + encodeURIComponent(parameters.listenerName),
                     host : endpoint.service.loadBalance[auth.region],
                     'opc-request-id' : parameters['opc-request-id'],
                     method : 'DELETE' },
                    callback );
};

module.exports = {
    update: update,
    create: create,
    drop: drop
    };
