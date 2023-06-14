module.exports = (app) => {
  const Controller = require("../controllers/blogController.js");

  var router = require("express").Router();

  router.get("/", Controller.get);

  app.use("/api/blog", router);
}