module.exports = (app) => {
  const Controller = require("../controllers/userController.js");

  var router = require("express").Router();

  router.post("/login", Controller.login);

  app.use("/api/user", router);
}