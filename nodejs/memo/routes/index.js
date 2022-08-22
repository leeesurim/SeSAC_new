const express = require("express");
const router = express.Router();
const memo = require("../controller/MemoController");

router.get("/", memo.index); 

module.exports = router; 
