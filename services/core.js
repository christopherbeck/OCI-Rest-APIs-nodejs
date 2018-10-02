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
var instance = ( './core/instance.js' );
var instanceConsoleConnection = ( './core/instanceConsoleConnection.js' );
var instanceCredential = ( './core/instanceCredential.js' );
var internetGateway = ( './core/internetGateway.js' );
var ipSecConnection = ( './core/ipSecConnection.js' );
var ipSecConnectionDeviceConfig = ( './core/ipSecConnectionDeviceConfig.js' );
var ipSecConnectionDeviceStatus = ( './core/ipSecConnectionDeviceStatus.js' );
var letterOfAuthority = ( './core/letterOfAuthority.js' );
var localPeeringGateway = ( './core/localPeeringGateway.js' );
var peerRegionForRemorePeering = ( './core/peerRegionForRemorePeering.js' );
var privateIp = ( './core/privateIp.js' );
var publicIp = require( './core/publicIp.js' );
var remotePeeringConnection = require( './core/remotePeeringConnection.js' );
var routeTable = require( './core/routeTable.js' );
var securityList = require( './core/securityList.js' );
var service = require( './core/service.js' );
var serviceGateway = require( './core/serviceGateway.js' );
var shape = require( './core/shape.js' );
var subnet = require( './core/subnet.js' );
var vcn = require( './core/vcn.js' );
var virtualCircuit = require( './core/virtualCircuit.js' );
var virtualCircuitBandwidthShape = require( './core/virtualCircuitBandwidthShape.js' );
var virtualCircuitPublicPrefix = require( './core/virtualCircuitPublicPrefix.js' );
var vnic = require( './core/vnic.js' );
var vnicAttachment = require( './core/vnicAttachment.js' );

module.exports = {
    bootVolume: bootVolume,
    bootVolumeAttachment: bootVolumeAttachment,
    consoleHistory: consoleHistory,
    cpe: cpe,
    crossConnect: crossConnect,
    crossConnectGroup: crossConnectGroup,
    crossConnectLocation: crossConnectLocation,
    crossConnectPortSpeedShape: crossConnectPortSpeedShape,
    crossConnectStatus: crossConnectStatus,
    dhcpOptions: dhcpOptions,
    drg: drg,
    drgAttachment: drgAttachment,
    fastConnectProviderServices: fastConnectProviderServices,
    image: image,
    instance: instance,
    instanceConsoleConnection: instanceConsoleConnection,
    instanceCredential: instanceCredential,
    internetGateway: internetGateway,
    ipSecConnection: ipSecConnection,
    ipSecConnectionDeviceConfig: ipSecConnectionDeviceConfig,
    ipSecConnectionDeviceStatus: ipSecConnectionDeviceStatus,
    letterOfAuthority: letterOfAuthority,
    localPeeringGateway: localPeeringGateway,
    peerRegionForRemorePeering: peerRegionForRemorePeering,
    privateIp: privateIp,
    publicIp: publicIp,
    remotePeeringConnection: remotePeeringConnection,
    routeTable: routeTable,
    securityList: securityList,
    service: service,
    serviceGateway: serviceGateway,
    shape: shape,
    subnet: subnet,
    vcn: vcn,
    virtualCircuit: virtualCircuit,
    virtualCircuitBandwidthShape: virtualCircuitBandwidthShape,
    virtualCircuitPublicPrefix: virtualCircuitPublicPrefix,
    vnic: vnic,
    vnicAttachment: vnicAttachment
}