const uploadModel = require('../models/feedback.model');

function saveUploadToDB(uploadInfo, callback) {
  const newInfo = new uploadModel({
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
