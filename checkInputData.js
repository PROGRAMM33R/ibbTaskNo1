/*
  ver[1.0]
  description: Functions witch are needed in checking input data in query strings
  */

exports.checkRoute = function checkRoute( route, callback ){

  if (route == '/track/' || route == "/track")
    callback( true );
  else
    callback( false );

};

exports.checkCount = function checkCount( queryObject, callback ){

  if ( !isNaN(queryObject.count) ){
    var tmpCount = queryObject.count;
    callback(tmpCount);
  } else {
    callback(null);
  }

};
