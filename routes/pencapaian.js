module.exports = (app) => {
  const Controller = require("../controllers/pencapaianController.js");

  var router = require("express").Router();

  router.get("/", Controller.get);

  app.use("/api/pencapaian", router);
}