const mongoose = require('mongoose')

const Schema = mongoose.Schema

var ToolSchema = new Schema({
	id: String,
	answer: String,
});

var Tools = mongoose.model('tool', ToolSchema);

module.exports = Tools;