const router = require('express').Router();
const toolsController = require('../controllers/tools.controller');
const fileController = require('../controllers/files.controller');
const feedbackController = require('../controllers/feedback.controller');
const uploadController = require('../controllers/upload.controller');

module.exports = (app) => {
  router.get('/', toolsController.findAll);
  router.post('/save', toolsController.saveTool);
  router.post('/upload', fileController.upload);
  router.post('/upload/file', uploadController.saveFile);
  router.get('/files', fileController.getListFiles);
  router.get('/files/:name', fileController.download);
  router.post('/feedback', feedbackController.saveFeedback);

  app.use('/api/tools', router);
};
