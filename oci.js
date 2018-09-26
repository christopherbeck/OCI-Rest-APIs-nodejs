var database = require( './services/database.js' );
var objectStore = require( './services/objectStore.js' );
var core = require( './services/core.js' );
var iam = require( './services/iam.js' );

module.exports = {
    database: database,
    objectStore: objectStore,
    core: core,
    iam: iam
}