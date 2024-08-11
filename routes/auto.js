//app.js
/*
const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();
const { google } = require("googleapis");
const date = require('date-and-time');

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
res.render("index");
});

app.post("/", async (req, res) => {

  const {tester} = req.body;

  const now = new Date();
  let tanggal = date.format(now, 'YYYY/MM/DD');
  let waktu = date.format(now,'HH:mm:ss');
     
  const auth = new google.auth.GoogleAuth({
    keyFile: "./credentials.json",
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  // Create client instance for auth
  const client = await auth.getClient();

  // Instance of Google Sheets API
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1Fw3dMbgyuInftlDW66lU7_FH76aIlG3m5RVxf2QQEGA";

  
  // tambahdata about spreadsheet
  const tambahdata = await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range : "Sheet1!A:C",
    valueInputOption : "USER_ENTERED",
    resource : {
        values : [
            [tester, tanggal, waktu],
        ]
    },
  });
  
  res.render("index");
});

const port = process.env.PORT || 5000; 
app.listen(port, () => {console.log(`Server is running on port ${port}`); });
*/