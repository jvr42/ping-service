var ping = require('ping');
 
var hosts = [
'192.168.0.7', 
'192.168.0.160',  
'192.168.0.157',
'192.168.0.148', 
'192.168.0.2',  
'192.168.0.75',
'192.168.0.138', 
'192.168.0.156'
];

hosts.forEach(function(host){
    ping.sys.probe(host, function(isAlive){
        var msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
        console.log(msg);
    });
});