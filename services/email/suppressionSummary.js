var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function list( auth, parameters, callback ) {
  var query = '';
  query = query + '?compartmentId=' + encodeURIComponent( parameters.compartmentId);
  if ( 'limit' in parameters )
    query = query + '&limit=' + encodeURIComponent( parameters.limit );
  if ( 'page' in parameters )
    query = query + '&page=' + encodeURIComponent( parameters.page );
  if ( 'emailAddress' in parameters )
    query = query + '&emailAddress=' + encodeURIComponent( parameters.emailAddress );
  if ( 'sortBy' in parameters )
    query = query + '&sortBy=' + encodeURIComponent( parameters.sortBy );
  if ( 'sortOrder' in parameters )
    query = query + '&sortOrder=' + encodeURIComponent( parameters.sortOrder );
  if ( 'timeCreatedGreaterThanOrEqualTo' in parameters )
    query = query + '&timeCreatedGreaterThanOrEqualTo=' + encodeURIComponent( parameters.timeCreatedGreaterThanOrEqualTo );
  if ( 'timeCreatedLessThan' in parameters )
    query = query + '&timeCreatedLessThan=' + encodeURIComponent( parameters.timeCreatedLessThan );

  ocirest.process( auth,
                   { path : auth.RESTversion + '/suppressions' +
                            query,
                     host : endpoint.service.email[auth.region],
                     method : 'GET' },
                    callback );
};
module.exports = {
    list: list
    };
