const ToolModel = require('../models/tool.model');

function isNew(id, callback) {
  ToolModel.findOne({ id }, (err, existingTool) => {
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
      const newTool = new ToolModel({
        id: toolInfo.id,
        answer: toolInfo.answer,
        description: toolInfo.description,
      });

      newTool.save((error) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, true);
        }
      });
    } else {
      callback(null, false);
    }
  });
}

module.exports = {
  isNew,
  saveTool,
};
