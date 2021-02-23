const toolModel = require('../../db/models/tool.model');
const toolResponseService = require('../../db/services/toolResponseService');

function findAll(req, res) {
  toolModel.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving tutorials.',
      });
    });
}

function saveTool(req, res) {
  toolResponseService.saveToolToDB(req.body, (saveErr) => {
    if (saveErr) {
      res.status(500).send({
        message:
        saveErr.message || 'Unable to save feedback',
      });
    } else res.status(200).send({ message: 'Successfully saved ' });
  });
}

module.exports = {
  findAll,
  saveTool,
};
