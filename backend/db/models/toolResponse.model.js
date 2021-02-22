const mongoose = require('mongoose')

const Schema = mongoose.Schema

let ToolSchema = new Schema({
	id: String,
	answer: String,
	description: String,
});

let Tools = mongoose.model('toolResponse', ToolSchema);

module.exports = Tools;