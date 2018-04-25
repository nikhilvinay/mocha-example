var helper = require("./help.js");
var assert = require('assert');
var chai = require('chai');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
})

describe('Math' , function(){
	it('should return value as 9' , function (){
		assert.equal(9 , 3*3);
	})

	it('should return -1.Applies operator precision' , function (){
		assert.equal(-8 , (3-4)*8);
	})
})


describe("Testing inbuilt function from helper" , function(){
	describe("Testing multiplication function" , function(){

		it('a is string.Should give an error',function(){
			assert.equal( undefined , helper.multi('vinay' , 8));

		})

		it('b is string. Should give an error',function(){
			assert.equal( undefined , helper.multi(8 , 'Vinay'));
		})

		it('Should give multiplication 24',function(){
			assert.equal( 24 , helper.multi(8 , 3));
		})

	})

});

