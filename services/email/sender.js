var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function create( auth, parameters, callback ){
  ocirest.process( auth,
                   { path : auth.RESTversion + '/senders',
                     host : endpoint.service.email[auth.region],
                     method : 'POST',
                     body : parameters.body }, 
                   callback );
}

function get( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/senders/' + encodeURIComponent(parameters.senderId),
                     host : endpoint.service.email[auth.region],
                     method : 'GET' },
                    callback );
};

function drop( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/senders/' + encodeURIComponent(parameters.senderId),
                     host : endpoint.service.email[auth.region],
                     method : 'DELETE' },
                    callback );
};

module.exports = {
    get: get,
    create: create,
    drop: drop
    };
