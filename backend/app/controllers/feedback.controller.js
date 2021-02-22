let feedbackService = require('../../db/services/feedbackService')



function saveFeedback(req, res){
    feedbackService.saveFeedbackToDB(req.body, (saveErr, _) => {
        if (saveErr) {
            res.status(500).send({
                message:
                  err.message || "Unable to save feedback"
              });
        }
    else res.status(200).send({ message: "Successfully saved "})})
};

module.exports = {
    saveFeedback,
};