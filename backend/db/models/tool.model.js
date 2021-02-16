const mongoose = require('mongoose')

const Schema = mongoose.Schema

var ToolSchema = new Schema({
	id: String,
	answer: String,
});

var User = mongoose.model('tool', ToolSchema);

module.exports = User;