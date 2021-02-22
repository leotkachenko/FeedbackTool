let feedbackModel = require('../../db/models/feedback.model');

function saveFeedbackToDB(feedbackInfo, callback) {
	let newFeedback = new feedbackModel({
                tittle: feedbackInfo.tittle,
                summary: feedbackInfo.summary
    })
    console.log(newFeedback)
    newFeedback.save((err) => {
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