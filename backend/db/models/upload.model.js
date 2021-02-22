const mongoose = require('mongoose');

const { Schema } = mongoose;

const UploadSchema = new Schema({
  tittle: String,
  file: Array,
});

const Upload = mongoose.model('upload', UploadSchema);

module.exports = Upload;
