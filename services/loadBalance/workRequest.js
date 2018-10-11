var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function get( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + 
                            '/loadBalancerWorkRequests/' + encodeURIComponent(parameters.workRequestId) +
                            '/pathRouteSets/' + encodeURIComponent(parameters.pathRouteSetName),
                     host : endpoint.service.loadBalance[auth.region],
                     'opc-request-id' : parameters['opc-request-id'],
                     method : 'GET' },
                    callback );
};

function list( auth, parameters, callback ) {
  var query = '';
  if ( 'limit' in parameters )
    query = query + '&limit=' + encodeURIComponent( parameters.limit );
  if ( 'page' in parameters )
    query = query + '&page=' + encodeURIComponent( parameters.page );
  ocirest.process( auth,
                   { path : auth.RESTversion + 
                            '/loadBalancerWorkRequests/' + encodeURIComponent(parameters.workRequestId) +
                            '/workRequests' + query,
                     host : endpoint.service.loadBalance[auth.region],
                     'opc-request-id' : parameters['opc-request-id'],
                     method : 'GET' },
                    callback );
};

module.exports = {
    list: list,
    get: get
    };
