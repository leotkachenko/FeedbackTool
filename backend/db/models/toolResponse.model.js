const mongoose = require('mongoose');

const { Schema } = mongoose;

const ToolSchema = new Schema({
  id: String,
  answer: String,
  description: String,
});

const Tools = mongoose.model('toolResponse', ToolSchema);

module.exports = Tools;
