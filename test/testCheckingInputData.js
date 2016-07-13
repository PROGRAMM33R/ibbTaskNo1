

var chai = require("chai");
var expect = require("chai").expect;
var sinon  = require("sinon");

var check = require("../checkInputData");

describe("Checking input query strings data in URL", function(){

  it("Good route ( allowed only route /track )", function(){

    var callback = sinon.spy();
    check.checkRoute( "/track", callback );
    sinon.assert.calledOnce( callback.withArgs(true) );

  });

  it("Wrong route", function(){

    var callback = sinon.spy();
    check.checkRoute( "/", callback );
    sinon.assert.calledOnce( callback.withArgs(false) );

  });

  it("Query String ,count, exist and its in a good format (number)", function(){

    var queryObject = {"count":"1.1"};
    var callback = sinon.spy();
    check.checkCount( queryObject, callback );
    sinon.assert.calledOnce( callback.withArgs("1.1") );

  });

  it("Query String ,count, dont exist or its not in a good format (number)", function(){

    var queryObject = {"count":"a"};
    var callback = sinon.spy();
    check.checkCount( queryObject, callback );
    sinon.assert.calledOnce( callback.withArgs(null) );

  });

});
