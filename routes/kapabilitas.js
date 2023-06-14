module.exports = (app) => {
  const Controller = require("../controllers/kapabilitasController.js");

  var router = require("express").Router();

  router.get("/", Controller.get);

  app.use("/api/kapabilitas", router);
}