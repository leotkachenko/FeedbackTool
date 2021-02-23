const feedbackService = require('../../db/services/feedbackService');

function saveFeedback(req, res) {
  feedbackService.saveFeedbackToDB(req.body, (saveErr) => {
    if (saveErr) {
      res.status(500).send({
        message:
        saveErr.message || 'Unable to save feedback',
      });
    } else res.status(200).send({ message: 'Successfully saved ' });
  });
}

module.exports = {
  saveFeedback,
};
