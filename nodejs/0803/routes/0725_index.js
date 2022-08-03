const express = require("express");
const router = express.Router();

const user = require("../controller/0725_controller")

router.get("/", user.index);

router.get("/receive", user.receive);

router.get("/filename", user.filename);

module.exports = router;
