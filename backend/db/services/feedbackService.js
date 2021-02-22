let feedbackModel = require('../../db/models/feedback.model');

function saveFeedbackToDB(feedbackInfo, callback) {
	let newTool = new feedbackModel({
                tittle: feedbackInfo.tittle,
                summary: feedbackInfo.summary
    })
    console.log(newTool)
    newTool.save((err) => {
				if (err) {
					callback(err, null);
				} else {
					callback(null, true);
				}
            });
}

module.exports = {
    saveFeedbackToDB,
};