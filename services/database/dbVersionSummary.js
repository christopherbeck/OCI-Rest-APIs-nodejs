var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function list( auth, parameters, callback ) {
    var query = '';
    query = query + '?compartmentId=' + encodeURIComponent(parameters.compartmentId);
    if( 'limit' in parameters )
      query = query + '&limit=' + encodeURIComponent(parameters.limit);
    if( 'page' in parameters )
      query = query + '&page=' + encodeURIComponent(parameters.page);
    if( 'dbSystemShape' in parameters )
      query = query + '&dbSystemShape=' + encodeURIComponent(parameters.dbSystemShape);
    if( 'dbSystemId' in parameters )
      query = query + '&dbSystemId=' + encodeURIComponent(parameters.dbSystemId);
    
    ocirest.process( auth,
                     { path : auth.RESTversion + '/dbVersions' + query,
                       host : endpoint.service.database[auth.region],
                       method : 'GET' },
                     callback );
  };

module.exports = {
    list: list
}