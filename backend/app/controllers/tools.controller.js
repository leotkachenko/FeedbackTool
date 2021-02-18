var toolModel = require('../../db/models/tool.model');

function getAll(callback) {
	 toolModel.find({}, (err, tool) => {
		if (err) {
			callback(err, null);
		} else {
			 callback(null, tool);
		}
	})
}

const findAll = (req, res) => {
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

function isNew(id, callback) {
	toolModel.findOne({ id: id }, (err, existingTool) => {
		if (err) {
			callback(err, null);
			return;
		}
		if (existingTool) {
			callback(null, false);
		} else {
			callback(null, true);
		}
	});
}

function saveTool(toolInfo, callback) {
	isNew(toolInfo.id, (err, result) => {
		if (err) {
			callback(err, null);
			return;
		}
		if (result) {
			var newTool = new toolModel({
				id: toolInfo.id,
				answer: toolInfo.answer,
			});

			newTool.save((err) => {
				if (err) {
					callback(err, null);
				} else {
					callback(null, true);
				}
			});
		} else {
			callback(null, false);
		}
	})
}

module.exports = {
	getAll,
	isNew,
  saveTool,
  findAll
};