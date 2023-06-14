const checkToken = require("../helpers/checkToken.js");

module.exports = (app) => {
  const Controller = require("../controllers/testimoniController.js");

  var router = require("express").Router();

  router.get("/", checkToken, Controller.get);

  app.use("/api/testimoni", router);
}