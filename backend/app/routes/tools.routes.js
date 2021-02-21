module.exports = app => {
  const tools_controller = require('../controllers/tools.controller')
  const file_controller = require('../controllers/files.controller')

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
  //     res.json(`Show ${tools.map(i=>i.answer)}`)})})
  // router.get("/", (req, res) => {
  //       db_service.getAll((err, tools) => {
  //           if(err) {
  //           console.log(err.message);
  //           return;
  //       }
  //       console.log(tools.map(i=>i.answer))
  //       res.send(tools.map(i=>i.answer))})});
  // Retrieve all Tutorials
  // // Retrieve all published Tutorials
  // router.get("/published", tutorials.findAllPublished);

  // // Retrieve a single Tutorial with id
  // router.get("/:id", tutorials.findOne);

  // // Update a Tutorial with id
  // router.put("/:id", tutorials.update);

  // // Delete a Tutorial with id
  // router.delete("/:id", tutorials.delete);

  // router.delete("/", tutorials.deleteAll);

  app.use('/api/tools', router);
};