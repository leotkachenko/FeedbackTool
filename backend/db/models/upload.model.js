const mongoose = require('mongoose')

const Schema = mongoose.Schema

var UploadSchema = new Schema({
	tittle: String,
    file: Array,
});

var Upload = mongoose.model('upload', UploadSchema);

module.exports = Upload;