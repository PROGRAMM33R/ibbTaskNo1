/*
  ver[1.0]
  description: Configuration variables
  */

//-----------------------------------------------------
var outputDirectory = "./";
var nameOutputFile  = "output.json";
var port = 8000; // default port to http server
var dbIP = "127.0.0.1";
var dbPort = 6379;
var dbStringCount = "count";
//-----------------------------------------------------


exports.getOutputDirectory = function getOutputDirectory(){
  return outputDirectory;
}
exports.setOutputDirectory = function setOutputDirectory( outputDir ){
  outputDirectory = outputDir;
}

exports.getNameOutputFile = function getNameOutputFile(){
  return nameOutputFile;
}
exports.setNameOutputFile = function setNameOutputFile( _nameOutputFile ){
  nameOutputFile = _nameOutputFile;
}

exports.getPort = function getPort(){
  return port;
}
exports.setPort = function setPort( _port ){
  port = _port;
}

exports.getDBIp = function getIpDB(){
  return dbIP;
}
exports.setDBIp = function setIpDB( _ipDB ){
  dbIP = _ipDB;
}

exports.getDBPort = function getDBPort(){
  return dbPort;
}
exports.setDBPort = function setDBPort( _dbPort ){
  dbPort = _dbPort;
}

exports.getDBStringCount = function getDBStringCount(){
  return dbStringCount;
}
exports.setDBStringCount = function setDBStringCount( _dbStringCount ){
  dbStringCount = _dbStringCount;
}
