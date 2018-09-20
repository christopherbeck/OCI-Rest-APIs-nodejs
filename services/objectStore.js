var bucket = require( './objectStore/bucket.js' );
var namespace = require( './objectStore/namespace.js' );
var obj = require( './objectStore/obj.js' );
var preauthenticatedRequest = require( './objectStore/preauthenticatedRequest.js');

module.exports = {
    bucket: bucket,
    namespace: namespace,
    obj: obj,
    preauthenticatedRequest : preauthenticatedRequest
}