const express = require("express");
const router = express.Router();
const app = express();
const { google } = require("googleapis");
const date = require('date-and-time');
const fs = require('fs');
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

router.get("/", async (req, res) => {
  res.render('index');
});


module.exports = router;
