const mongoose = require('mongoose')

const Schema = mongoose.Schema

var ToolSchema = new Schema({
	id: String,
	Answer: String,
});

var User = mongoose.model('tool', ToolSchema);

module.exports = User;