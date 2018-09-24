var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function list( auth, parameters, callback ) {
    var query = '';
    if( 'limit' in parameters )
      query = query + '&limit=' + encodeURIComponent(parameters.limit);
    if( 'page' in parameters )
      query = query + '&page=' + encodeURIComponent(parameters.page);
    
    ocirest.process( auth,
                     { path : auth.RESTversion + '/dbSystemSpahes' + 
                              '?availabilityDomain=' + encodeURIComponent(parameters.availabilityDomain) +
                              '&compartmentId=' + encodeURIComponent(parameters.compartmentId) +
                              query,
                       host : endpoint.service.database[auth.region],
                       method : 'GET' },
                     callback );
  };

module.exports = {
    list: list
}