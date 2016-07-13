

var chai = require("chai");
var expect = require("chai").expect;
var sinon  = require("sinon");

var makeJson = require("../createJSON");
var fs       = require("fs");

describe("Creatting new JSON file", function(){

  it("fs.appendFile has been called and input data are correct", function(){

    var queryObject = {"count":"1.8","port":"9995"};
    var outDir   = "./";
    var fileName = "sth.json";
    var callback = sinon.spy();

    var fsAppend = sinon.stub( fs, 'appendFile' );
    makeJson.makeJSONFile( queryObject, fileName, outDir, callback );
    sinon.assert.calledOnce( fsAppend );
    fsAppend.restore();

  });

});
