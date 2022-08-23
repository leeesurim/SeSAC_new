const express = require("express");
const router = express.Router();
const memo = require("../controller/MemoController");

router.get("/", memo.index); 
router.post("/write", memo.post_cotent);

module.exports = router; 
