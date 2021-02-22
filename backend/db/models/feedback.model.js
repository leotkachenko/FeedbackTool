const mongoose = require('mongoose')

const Schema = mongoose.Schema

var FeedBackSchema = new Schema({
	tittle: String,
	summary: String,
});

var FeedBack = mongoose.model('feedback', FeedBackSchema);

module.exports = FeedBack;