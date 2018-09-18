var autonomousDatabase = require( './database/autonomousDatabases.js' );
var autonomousDataWarehouse = require( './database/autonomousDataWarehouses.js' );
var autonomousDatabaseBackup = require( './database/autonomousDatabaseBackups.js' );
var autonomousDataWarehouseBackup = require( './database/autonomousDataWarehouseBackups.js' );

module.exports = {
    autonomousDatabase: autonomousDatabase,
    autonomousDataWarehouse: autonomousDataWarehouse,
    autonomousDatabaseBackup: autonomousDatabaseBackup,
    autonomousDataWarehouseBackup: autonomousDataWarehouseBackup
}