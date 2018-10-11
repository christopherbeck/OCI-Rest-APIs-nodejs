var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function list( auth, parameters, callback ){
    var query = '';
    if( 'interval' in parameters )
      query += (query==''?'&':'?') + 'interval=' + encodeURIComponent(parameters.interval);
    if( 'vantagePointName' in parameters )
      query += (query==''?'&':'?') + 'vantagePointName=' + encodeURIComponent(parameters.vantagePointName);
    if( 'providerRankLessThanOrEqualTo' in parameters )
      query += (query==''?'&':'?') + 'providerRankLessThanOrEqualTo=' + encodeURIComponent(parameters.providerRankLessThanOrEqualTo);
    if( 'fields' in parameters )
      query += (query==''?'&':'?') + 'fields=' + encodeURIComponent(parameters.fields);
    if( 'limit' in parameters )
      query += (query==''?'&':'?') + 'limit=' + encodeURIComponent(parameters.limit);
    if( 'page' in parameters )
      query += (query==''?'&':'?') + 'page=' + encodeURIComponent(parameters.page);
      
    ocirest.process( auth,
                     { path : auth.RESTVersion + '/marketPerformance/marketLatencies',
                       host : endpoint.service.internetIntel[auth.region],
                       method : 'GET' },
                     callback );
  }

module.exports = {
  list: list
}