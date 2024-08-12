const express = require("express");
const router = express.Router();
const app = express();
const { google } = require("googleapis");
const date = require('date-and-time');
const fs = require('fs');

router.get("/", async (req, res) => {
  res.render('index');
});


module.exports = router;
