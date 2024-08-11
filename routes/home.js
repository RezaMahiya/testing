const express = require("express");
const router = express.Router();
const app = express();
const { google } = require("googleapis");
const date = require('date-and-time');

/*
router.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing",
    message: "The app is working properly!",
  });
});
*/

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
res.render("index");
});

module.exports = router;
