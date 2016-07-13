/*
 file: main.js
 author: Adam Lasak
 ver[2.0]
 */
'use strict'

var http  = require("http");
var url   = require("url");
var main  = require("./mainModul");
var conf  = require("./config");

http.createServer( function(request, response) {

	var queryObject = url.parse(request.url, true).query;
	var nameOfRoute = url.parse(request.url).pathname;

	main.mainModul( queryObject, nameOfRoute, response, function(){
		response.end();
	});

}).listen( conf.getPort() );
