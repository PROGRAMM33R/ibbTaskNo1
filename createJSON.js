/*
 MODULE: createJSON
 ------------------------------------
 ver[1.0]
 */

var fs = require("fs");

exports.makeJSONFile = function( queryObject, fileName, outputDir, callback ){

	fs.appendFile( outputDir + fileName , JSON.stringify( queryObject ) + '\n', function(err) {
		callback( err );
	});

};
