const FeedbackModel = require('../models/feedback.model');

function saveFeedbackToDB(feedbackInfo, callback) {
  const newFeedback = new FeedbackModel({
    tittle: feedbackInfo.tittle,
    summary: feedbackInfo.summary,
  });
  console.log(newFeedback);
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
