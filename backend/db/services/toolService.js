var toolModel = require('../models/tool.model');

function getAll(callback) {
	 toolModel.find({}, (err, tool) => {
		if (err) {
			callback(err, null);
		} else {
			 callback(null, tool);
		}
	})
}

function isNew(chatId, callback) {
	toolModel.findOne({ chatId: chatId }, (err, existingUser) => {
		if (err) {
			callback(err, null);
			return;
		}
		if (existingUser) {
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
	saveTool
};