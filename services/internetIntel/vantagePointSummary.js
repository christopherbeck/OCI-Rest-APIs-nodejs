var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function list( auth, parameters, callback ){
    var query = '';
    if( 'limit' in parameters )
      query += (query==''?'&':'?') + 'limit=' + encodeURIComponent(parameters.limit);
    if( 'page' in parameters )
      query += (query==''?'&':'?') + 'page=' + encodeURIComponent(parameters.page);
      
    ocirest.process( auth,
                     { path : auth.RESTVersion + '/marketPerformance/vantagePoints',
                       host : endpoint.service.internetIntel[auth.region],
                       method : 'GET' },
                     callback );
  }

module.exports = {
  list: list
}