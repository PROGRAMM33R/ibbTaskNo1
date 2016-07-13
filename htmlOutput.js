/*
  ver[1.0]
  description: Strings, text witch are drawed on output to client
  */

exports.drawHead = function drawHead( response ){

  response.write("<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.1//EN\" \"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd\"> ");
  response.write("<html>");
  response.write("<head><title>ibbTaskNo1</title><style type=\"text/css\">html{ background-color: rgb(30,30,30); color: rgb(230, 230, 230); font-family: 'Arial' } b { color: rgb(75, 150, 250); }</style></head>");
  response.write("<body>");

};

exports.drawFooter = function drawFooter( response ){

  response.write("</body>");
  response.write("</html>");

};

exports.wrongRoute = function wrongRoute( response ){

  exports.drawHead(response);
  response.write("<p>You typed wrong route.</p>");
  exports.drawFooter(response);

};

exports.countExist = function countExist( response, countValue ){

  exports.drawHead(response);
  response.write("<p>Count has been incremented in database. Actual value: <b>" + countValue + "</b></p>");
  exports.drawFooter(response);

};
exports.countGetError = function countGetError( response ){

  exports.drawHead(response);
  response.write("<p>Error in getting variable from server.</p>");
  exports.drawFooter(response);


};
exports.countDoesntExist = function countDoesntExist( response ){

  exports.drawHead(response);
  response.write("<p>Count variable in query string <b>doesnt</b> exist or its wrong.</p>");
  exports.drawFooter(response);

};

exports.createJsonSuccess = function createJsonSuccess( response, fileName ){

  exports.drawHead(response);
  response.write("<p>File has been succesfully created: <b>" + fileName + "</b></p>");
  exports.drawFooter(response);

};

exports.createJsonUnsuccess = function createJsonUnsuccess( response, fileName ){

  exports.drawHead(response);
  response.write("<p>Error in saving data to file: <b>" + fileName + "</b></p>");
  exports.drawFooter(response);

};