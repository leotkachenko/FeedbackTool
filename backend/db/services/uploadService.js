const UploadModel = require('../models/feedback.model');

function saveUploadToDB(uploadInfo, callback) {
  const newInfo = new UploadModel({
    tittle: uploadInfo.tittle,
    file: uploadInfo.file,

  });
  newInfo.save((err) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, true);
    }
  });
}

module.exports = {
  saveUploadToDB,
};
