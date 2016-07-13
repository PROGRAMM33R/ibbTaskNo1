

var chai = require("chai");
var expect = require("chai").expect;
var sinon  = require("sinon");

var db = require("../dbConnect");
var redis = require("redis");

describe("Create connection to database and work with some data", function(){

  it("incrbyfloat has been called", function(){

    var callback = sinon.spy();
    var incrbyfloat = sinon.stub( db.client, 'incrbyfloat' );

    db.incrementCount( 5, callback );
    sinon.assert.calledOnce( incrbyfloat );
    incrbyfloat.restore();

  });

  it("If count variable exist", function(){

    var callback = sinon.spy();
    var exists = sinon.stub( db.client, 'exists' );

    db.getCount( callback );
    sinon.assert.calledOnce( exists );
    exists.restore();

  });

});
