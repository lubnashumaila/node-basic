var assert = require("chai").assert,
    expect = require("chai").expect,
    should = require("chai").should(); 

describe.only("My first Test Suite",function(){
before("Before every test case", function(){
	console.log("I am before")
})
beforeEach("Before every test case", function(){
	console.log("I am beforeEach")
})
after("Before every test case", function(){
	console.log("I am after")
})
afterEach("Before every test case", function(){
	console.log("I am afterEach")
})

	it("should return true", function(){
		var name ="London";
		//assert(true,"fails with false")
		//expect(true).to.be.true;
		expect(name).to.be.string;
		expect(name).to.be.equals("London");


	});
	it.only("should return true", function(){
		var name ="London";
		//assert(true,"fails with false")
		//expect(true).to.be.true;
		expect(name).to.be.string;
		expect(name).to.be.equals("London");


	});
	it.skip("should return true", function(){
		var name ="London";
		//assert(true,"fails with false")
		//expect(true).to.be.true;
		expect(name).to.be.string;
		expect(name).to.be.equals("London");


	});
})
	describe("My first Test Suite",function(){
	it("should return true", function(){
		var name ="London";
		//assert(true,"fails with false")
		//expect(true).to.be.true;
		expect(name).to.be.string;
		expect(name).to.be.equals("London");


	});
	it("should return true", function(){
		var name ="London";
		//assert(true,"fails with false")
		//expect(true).to.be.true;
		expect(name).to.be.string;
		expect(name).to.be.equals("London");


	});
	it.skip("should return true", function(){
		var name ="London";
		//assert(true,"fails with false")
		//expect(true).to.be.true;
		expect(name).to.be.string;
		expect(name).to.be.equals("London");


	});

})
