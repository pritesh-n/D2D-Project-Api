const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("welcome to quiz");
});

router.get("/quiz-1", (req, res) => {
  res.send("welcome to quiz 1");
});

module.exports = router;
