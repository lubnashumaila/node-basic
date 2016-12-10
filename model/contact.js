var mongoose = require("mongoose");
var contactSchema = mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	email :{
		type:String,
		required:true
	}
});

var Contact = module.exports = mongoose.model("contact",contactSchema,"contacts");

module.exports.getContact = function(callback){
	Contact.find(callback);
}

module.exports.addContact = function(contact , callback){
	Contact.create(contact,callback);
}

module.exports.updateContact = function(id,body,callback){
     Contact.update({_id : id} ,body,callback)
}

module.exports.removeContact = 	function(id,callback){
	Contact.remove({_id : id}, callback);
}