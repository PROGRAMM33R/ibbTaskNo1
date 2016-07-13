/*
  ver[1.0]
  description: Checking route, queries, making JSON output
  */

var check     = require("./checkInputData");
var draw      = require("./htmlOutput");
var conf      = require("./config");
var makeJson  = require("./createJSON");
var db        = require("./dbConnect");

exports.mainModul = function mainModul( queryObject, nameOfRoute, response, mainCallback ){

  check.checkRoute( nameOfRoute, function( isRouteCorrect ){

    if ( isRouteCorrect ){

      makeJson.makeJSONFile( queryObject, conf.getNameOutputFile(), conf.getOutputDirectory(), function( err ){

        if ( err == null ){

          response.writeHead(200, {"Content-Type": "text/html"});
          draw.createJsonSuccess( response, conf.getNameOutputFile() );

        } else {

          response.writeHead(404, {"Content-Type": "text/html"});
          draw.createJsonUnsuccess( response, conf.getNameOutputFile() );

        }

        check.checkCount( queryObject, function( newCount ){

          if ( newCount != null){

            db.incrementCount( newCount, function( err ){

              if ( err == null ){

                db.getCount( function( err, reply ){

                  if (!err){
                    draw.countExist( response, reply );
                    mainCallback();
                  } else {
                    draw.countGetError();
                    mainCallback();
                  }

                });

              } else {

                draw.countDoesntExist( response );
                mainCallback();

              }

            });

          } else {

            draw.countDoesntExist( response );
            mainCallback();

          }

        }); // end checking count

      }); // end appending JSON file

    } else if ( !isRouteCorrect ){

      response.writeHead(404, {"Content-Type": "text/html"});
      draw.wrongRoute( response );
      mainCallback();

    }

  });

};