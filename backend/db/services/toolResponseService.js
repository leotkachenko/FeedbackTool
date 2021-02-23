const ToolModel = require('../models/toolResponse.model');

function saveToolToDB(toolInfo, callback) {
  const newTool = new ToolModel({
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
}

module.exports = {
  saveToolToDB,
};
