var bootVolume = require( './core/bootVolume.js' );
var bootVolumeAttachment = require( './core/bootVolumeAttachment.js' );
var consoleHistory = require( './core/consoleHistory.js' );
var cpe = require( './core/cpe.js' );
var crossConnect = ( './core/crossConnect.js' );
var crossConnectGroup = ( './core/crossConnectGroup.js' );
var crossConnectLocation = ( './core/crossConnectLocation.js' );
var crossConnectPortSpeedShape = ( './core/crossConnectPortSpeedShape.js' );
var crossConnectStatus = ( './core/crossConnectStatus.js' );
var dhcpOptions = ( './core/dhcpOptions.js' );
var drg = ( './core/drg.js' );
var drgAttachment = ( './core/drgAttachment.js' );
var fastConnectProviderServices = ( './core/fastConnectProviderServices.js' );
var image = ( './core/image.js' );
var vcn = require( './core/vcn.js' );

module.exports = {
    bootVolume: bootVolume,
    bootVolumeAttachment: bootVolumeAttachment,
    consoleHistory: consoleHistory,
    cpe: cpe,
    crossConnect: crossConnect,
    crossConnectGroup: crossConnectGroup,
    crossConnectLocation: crossConnectLocation,
    crossConnectPortSpeedShape: crossConnectPortSpeedShape,
    dhcpOptions: dhcpOptions,
    drg: drg,
    drgAttachment: drgAttachment,
    fastConnectProviderServices: fastConnectProviderServices,
    image: image,
    vcn: vcn
}