var chai = require("chai");
     expect = chai.expect;
     should = chai.should();

     describe("Language Chains Test Case", function(){

     	it("not assertions",function(){
     		var foo = "Flow";
     		expect(foo).to.not.equal("fly");
     		(foo).should.not.equal("fly");

     		function sample(){
     			//return "hello";
     			throw new Error("failed with Error");
     		}
     		expect(sample).to.throw(Error);
     		//expect(sample).to.not.throw(Error);
     		//sample.should.not.throw(Error);

     	})

     	it(" Not Equal ",function(){
     		var type = "String" ;
     		expect(type).to.not.equal("Integer");
     		type.should.not.equal("Integer");


     		var obj = {name : 'baz'};
     		expect(obj).to.have.property('name').and.not.equal('fly');
     		(obj).should.have.property('name').and.not.equal('fly');
     	})


     	it("deep assertion ",function(){
     		var obj = { city : 'Bengaluru' }
     		var objOne = {

     			state :{

     				city :{

     					name : 'Hyderabad'
     				}
     			}
     		}

     		var deepCss = { '.link' : {'[target]': 45}};
     		expect(obj).to.deep.equal({city : 'Bengaluru'});
     		expect(objOne).to.have.deep.property('state.city.name', 'Hyderabad');
     		expect(deepCss).to.have.deep.property("\\.link.\\[target\\]", 45); //TO REMOVE THE special characters we have to append the \\ before the special character

			//expect(obj).to.be.eql({city : 'Bengaluru'});

     		obj.should.deep.equal({city : 'Bengaluru'});
     		objOne.should.deep.property('state.city.name','Hyderabad');
     	})

     	it("any assertion", function(){

     		var sample ={
     			name : 'lubna',
     			city : 'Bangalore'
     		};
     		sample.should.have.any.keys("city");
			expect(sample).to.have.any.keys("name","city");

     	})

		it("all assertion", function(){

     		var sample ={
     			name : 'lubna',
     			city : 'Bangalore'
     		};
     		sample.should.have.all.keys("name","city");
			expect(sample).to.have.all.keys("name","city");
			//expect(sample).to.have.property("name","city");


     	})

		it("a and an assertions",function(){
			expect('london').to.be.a('String');
			('london').should.be.a('string');
			expect({city :'london'}).to.be.an('object');
			expect(null).to.be.a('null');
			("").should.to.be.a('string');
		})

		it("include assertion",function(){
			expect([1,2,3]).to.include(2,5);
		})

 
		it("match expressions",function(){
			expect('99abc').to.match(/^[0-9a-zA-Z]/)
		})
     })