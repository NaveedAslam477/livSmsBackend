var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = Schema({
	phone_number: 
	{
		type:String,
	},
	email_address: 
	{
		type:String,
	},
	user_name: 
	{
		type:String,
	},
	company: 
	{
		type:String,
	},
	first_name:{
        type:String,
	},
	last_name:
	{
        type:String,
	},
	created_at:
	{
        type:String,
	},
	updated_at:
	{
        type:String,
	},
});

module.exports = mongoose.model('Contacts', ContactSchema);