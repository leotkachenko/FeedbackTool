let toolModel = require('../../db/models/tool.model');

function findAll(req, res){
  toolModel.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

module.exports = {
  findAll:findAll,
};