const express = require("express");
const router = express.Router();
const user = require("../controller/UserController");

router.get("/", user.index);
router.get("/register", user.register);
router.post("/register", user.post_register);

router.get("/login", user.login);
router.post("/login", user.post_login);

router.get("/update", user.update);
router.post("/update", user.post_select);
router.patch("/update", user.patch_update);
router.delete("/update", user.delete_user);

module.exports = router;