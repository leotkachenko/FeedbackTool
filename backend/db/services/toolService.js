let toolModel = require('../../db/models/tool.model');

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
        description: toolInfo.description,
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
	isNew,
  saveTool,
};