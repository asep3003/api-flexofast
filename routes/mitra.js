module.exports = (app) => {
  const Controller = require("../controllers/mitraController.js");

  var router = require("express").Router();

  router.get("/", Controller.get);

  app.use("/api/mitra", router);
}