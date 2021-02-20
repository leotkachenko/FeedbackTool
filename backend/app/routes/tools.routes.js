module.exports = app => {
  const tools_get_all = require('../controllers/tools.controller')

  var router = require("express").Router();
  // Retrieve all Tutorials
  // app.get("/", (req, res) => {
  //     db_service.getAll((err, tools) => {
  //         if(err) {
  //         console.log(err.message);
  //         return;
  //     }
  router.get("/", tools_get_all.findAll);
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