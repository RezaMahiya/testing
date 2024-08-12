const express = require("express");
const router = express.Router();
const app = express();
const { google } = require("googleapis");
const date = require('date-and-time');
const path = require("path");


router.get("/", async (req, res, next) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});
/*
router.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing",
    message: "The app is working properly!",
  });
});
*/

module.exports = router;
