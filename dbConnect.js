/*
  ver[2.0]
  description: Functions to connect to database
  */

var conf  = require("./config");
var redis = require("redis");

exports.client = redis.createClient( conf.getDBPort(), conf.getDBIp() );

exports.incrementCount = function( value, callback ){

	exports.client.incrbyfloat( conf.getDBStringCount(), value, function(err, reply){
		callback( err );
	});

};

exports.getCount = function getCount( callback ){

	exports.client.exists(conf.getDBStringCount(), function(err, reply) {

        if (reply === 1) {

            exports.client.get(conf.getDBStringCount(), function(err, reply) {
                callback( err, reply );
            });

        } else {
            callback( true, 0 );
        }

	});

};
