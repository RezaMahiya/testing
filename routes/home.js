const express = require("express");
const router = express.Router();
const app = express();
const { google } = require("googleapis");
const date = require('date-and-time');
const fs = require('fs');

router.get("/", async (req, res, next) => {
  res.setHeader('Content-Type','text/html');
  fs.readFile('./views/index.html',(err,data) => {
  if (err) {
    console.log(err);
    res.end();
  } else {
    res.write(data);
    res.end();
  }
});
});


module.exports = router;
