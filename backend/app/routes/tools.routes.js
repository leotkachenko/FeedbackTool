module.exports = app => {
   const tools = require("../controllers/tools.controller");
  
   var router = require("express").Router();
  
    // Retrieve all Tutorials
   router.get("/", tools.findAll);
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