

var chai = require("chai");
var expect = require("chai").expect;
var sinon  = require("sinon");

var draw   = require("../htmlOutput");

describe("HTML outputs", function(){
	describe("HTML output function must write head or footer only one time.", function(){

		it ("Draw head have specific count of response.write calling.", function(){

			var response = {
				write : function(){}
			};

			var write = sinon.stub( response, 'write' );

			draw.drawHead( response );

			sinon.assert.callCount( write, 4 );

			write.restore();

		});

		it ("Draw footer have specific count of response.write calling.", function(){

			var response = {
				write : function(){}
			};

			var write = sinon.stub( response, 'write' );

			draw.drawFooter( response );

			sinon.assert.callCount( write, 2 );

			write.restore();

		});

		it ("Wrong Route calling head and footer only one time.", function(){

			var response = {
				write : function(){}
			};

			var spyHead = sinon.spy( draw, 'drawHead' );
			var spyFooter = sinon.spy( draw, 'drawFooter' );
			var write = sinon.stub( response, 'write' );

			draw.wrongRoute( response );

			sinon.assert.callCount( write, 7 );
			sinon.assert.calledOnce( spyHead );
			sinon.assert.calledOnce( spyFooter );

			spyHead.restore();
			spyFooter.restore();
			write.restore();

		});

		it ("Count Exist calling head and footer only one time.", function(){

			var response = {
				write : function(){}
			};

			var spyHead = sinon.spy( draw, 'drawHead' );
			var spyFooter = sinon.spy( draw, 'drawFooter' );
			var write = sinon.stub( response, 'write' );

			draw.wrongRoute( response );

			sinon.assert.callCount( write, 7 );
			sinon.assert.calledOnce( spyHead );
			sinon.assert.calledOnce( spyFooter );

			spyHead.restore();
			spyFooter.restore();
			write.restore();

		});

		it ("Count Get Error calling head and footer only one time.", function(){

			var response = {
				write : function(){}
			};

			var spyHead = sinon.spy( draw, 'drawHead' );
			var spyFooter = sinon.spy( draw, 'drawFooter' );
			var write = sinon.stub( response, 'write' );

			draw.countGetError( response );

			sinon.assert.callCount( write, 7 );
			sinon.assert.calledOnce( spyHead );
			sinon.assert.calledOnce( spyFooter );

			spyHead.restore();
			spyFooter.restore();
			write.restore();

		});

		it ("Count Doesnt Exist calling head and footer only one time.", function(){

			var response = {
				write : function(){}
			};

			var spyHead = sinon.spy( draw, 'drawHead' );
			var spyFooter = sinon.spy( draw, 'drawFooter' );
			var write = sinon.stub( response, 'write' );

			draw.countDoesntExist( response );

			sinon.assert.callCount( write, 7 );
			sinon.assert.calledOnce( spyHead );
			sinon.assert.calledOnce( spyFooter );

			spyHead.restore();
			spyFooter.restore();
			write.restore();

		});

		it ("Count Doesnt Exist calling head and footer only one time.", function(){

			var response = {
				write : function(){}
			};

			var spyHead = sinon.spy( draw, 'drawHead' );
			var spyFooter = sinon.spy( draw, 'drawFooter' );
			var write = sinon.stub( response, 'write' );

			draw.countDoesntExist( response );

			sinon.assert.callCount( write, 7 );
			sinon.assert.calledOnce( spyHead );
			sinon.assert.calledOnce( spyFooter );

			spyHead.restore();
			spyFooter.restore();
			write.restore();

		});

		it ("Create JSON success calling head and footer only one time.", function(){

			var response = {
				write : function(){}
			};

			var spyHead = sinon.spy( draw, 'drawHead' );
			var spyFooter = sinon.spy( draw, 'drawFooter' );
			var write = sinon.stub( response, 'write' );

			draw.createJsonSuccess( response );

			sinon.assert.callCount( write, 7 );
			sinon.assert.calledOnce( spyHead );
			sinon.assert.calledOnce( spyFooter );

			spyHead.restore();
			spyFooter.restore();
			write.restore();

		});

		it ("Creat JSON UNsuccess calling head and footer only one time.", function(){

			var response = {
				write : function(){}
			};

			var spyHead = sinon.spy( draw, 'drawHead' );
			var spyFooter = sinon.spy( draw, 'drawFooter' );
			var write = sinon.stub( response, 'write' );

			draw.createJsonUnsuccess( response );

			sinon.assert.callCount( write, 7 );
			sinon.assert.calledOnce( spyHead );
			sinon.assert.calledOnce( spyFooter );

			spyHead.restore();
			spyFooter.restore();
			write.restore();

		});

	});
});
