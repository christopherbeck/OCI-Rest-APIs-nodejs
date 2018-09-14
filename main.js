var listADWC = require('./listADWC.js');
var auth = require('./auth.js');

listADWC.getATP(
    auth.ChrisCompartment,
    function(data){ console.log(data); }
);
