var chai = require("chai"),
    expect = require("chai").expect,
    should = require("chai").should(); 

var isEven = require("./isEven");

describe.skip("the main",function(){

		describe("sample test cases",function(){
			
			it("should return true if number is even",function(){
		         expect(isEven(4)).to.be.true;
		         isEven(4).should.to.true;
		        // isEven(4).should.be.true;
			})

			it("should return false if number is odd",function(){
				expect(isEven(3)).to.be.false;
				isEven(3).should.to.false;
			})
		})

		function add(num1,num2){
			return num1 + num2;
		}

		describe("check the functionality of beforeEach",function(){
			var num = 5;

			beforeEach(function(){
				num = 5
			})

			it("should return Ten is we add  5  +  5",function(){
				num = add(num , 5);
				num.should.be.equal(10);
			})

		   it("should return twelve if we add 5 + 7", function(){
		   	num = add(num , 7);
		   	num.should.to.be.equal(12);
		   })

		})
}) 