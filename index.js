"use strict";

var fetch = require('node-fetch')

var devices = [];
 
var hosts = [
'http://192.168.0.7', 
'http://192.168.0.160',  
'http://192.168.0.157',
'http://192.168.0.148', 
'http://192.168.0.2',  
'http://192.168.0.75',
'http://192.168.0.138', 
'http://192.168.0.156'
]

hosts.forEach(function(host){	
	fetch(host)
    .then(function(res) { return res.text()})
    .then(function(body) {
    	var x = body.match(/<title>(.*?)<\/title>/)
		var device = { ip: host, name: x[1] }
		return device
    })
    .then(function(d){
    	console.log(d);
    })
})
