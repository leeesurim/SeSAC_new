const express = require("express");
const Router = express.Router();
const user = require("../controller/0803_controller");


Router.get("/register", user.register);
Router.post("/register", user.post_register);

Router.get("/login", user.login);
Router.post("/login", user.post_login);


module.exports = Router;