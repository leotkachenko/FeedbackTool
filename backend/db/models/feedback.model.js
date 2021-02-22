const mongoose = require('mongoose');

const { Schema } = mongoose;

const FeedBackSchema = new Schema({
  tittle: String,
  summary: String,
});

const FeedBack = mongoose.model('feedback', FeedBackSchema);

module.exports = FeedBack;
