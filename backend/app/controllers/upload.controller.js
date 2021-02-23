const saveUploadService = require('../../db/services/uploadService');

function saveFile(req, res) {
  console.log(req);
  saveUploadService.saveUploadToDB(req.body, (saveErr) => {
    if (saveErr) {
      res.status(500).send({
        message:
        saveErr.message || 'Unable to save feedback',
      });
    } else res.status(200).send({ message: 'Successfully saved ' });
  });
}

module.exports = {
  saveFile,
};
