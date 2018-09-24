var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function getDbHome( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + 
                              '/dbHomes/' + encodeURIComponent(parameters.dbHomeId)+
                              '/patchHistoryEntries/' + encodeURIComponent(parameters.patchHistoryEntryId),
                       host : endpoint.service.database[auth.region],
                       method : 'GET' },
                     callback );
  };

function getDbSystem( auth, parameters, callback ) {
    ocirest.process( auth,
                     { path : auth.RESTversion + 
                              '/dbSystems/' + encodeURIComponent(parameters.dbSystemId)+
                              '/patchHistoryEntries/' + encodeURIComponent(parameters.patchHistoryEntryId),
                       host : endpoint.service.database[auth.region],
                       method : 'GET' },
                     callback );
  };


function listDbSystem( auth, parameters, callback ) {
    var query = '';
    if( 'limit' in parameters )
      query = query + '&limit=' + encodeURIComponent(parameters.limit);
    if( 'page' in parameters )
      query = query + '&page=' + encodeURIComponent(parameters.page);
    
    ocirest.process( auth,
                     { path : auth.RESTversion + 
                              '/dbSystems' + encodeURIComponent(parameters.dbSystemId) + '/patchHistoryEntries' +
                              query,
                       host : endpoint.service.database[auth.region],
                       method : 'GET' },
                     callback );
  };

function listDbHome( auth, parameters, callback ) {
    var query = '';
    if( 'limit' in parameters )
      query = query + '&limit=' + encodeURIComponent(parameters.limit);
    if( 'page' in parameters )
      query = query + '&page=' + encodeURIComponent(parameters.page);
    
    ocirest.process( auth,
                     { path : auth.RESTversion + 
                              '/dbHomes' + encodeURIComponent(parameters.dbHomeId) + '/patchHistoryEntries' +
                              query,
                       host : endpoint.service.database[auth.region],
                       method : 'GET' },
                     callback );
  };


module.exports = {
    getDbHome: getDbHome,
    getDbSystem: getDbSystem,
    listDbHome: listDbHome,
    listDbSystem: listDbSystem
}