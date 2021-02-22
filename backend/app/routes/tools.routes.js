module.exports = app => {
  const tools_controller = require('../controllers/tools.controller')
  const file_controller = require('../controllers/files.controller')
  const feedback_controller = require('../controllers/feedback.controller')

  var router = require("express").Router();
  // Retrieve all Tutorials
  // app.get("/", (req, res) => {
  //     db_service.getAll((err, tools) => {
  //         if(err) {
  //         console.log(err.message);
  //         return;
  //     }
  router.get("/", tools_controller.findAll);
  router.post("/upload", file_controller.upload);
  router.get("/files", file_controller.getListFiles);
  router.get("/files/:name", file_controller.download);
  router.post("/feedback", feedback_controller.saveFeedback)

  app.use('/api/tools', router);
};