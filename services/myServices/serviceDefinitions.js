var ocirest = require('../../utils/ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function get( auth, parameters, callback ) {
  var possibleQueryStrings = ['limit','name','offset','orderBy'];
  var queryString = ocirest.buildQueryString( possibleQueryStrings, parameters );
  var possibleHeaders = ['x-id-tenant-name'];
  var headers = ocirest.buildHeaders( possibleHeaders, parameters );
  ocirest.process( auth,
                   { path : '/itas/' + encodeURIComponent(parameters.domain) +
                            '/myservices/api' + auth.RESTversion +
                            '/serviceDefinitions' + queryString,
                     host : endpoint.service.myServices,
                     headers : headers,
                     method : 'GET' },
                    callback );
};

module.exports = {
    get: get
    };