var autonomousDatabase = require( './database/autonomousDatabase.js' );
var autonomousDataWarehouse = require( './database/autonomousDataWarehouse.js' );
var autonomousDatabaseBackup = require( './database/autonomousDatabaseBackup.js' );
var autonomousDataWarehouseBackup = require( './database/autonomousDataWarehouseBackup.js' );
var database = require( './database/database.js' );
var backup = require( './database/backup.js' );

module.exports = {
    autonomousDatabase: autonomousDatabase,
    autonomousDataWarehouse: autonomousDataWarehouse,
    autonomousDatabaseBackup: autonomousDatabaseBackup,
    autonomousDataWarehouseBackup: autonomousDataWarehouseBackup,
    database: database,
    backup: backup
}