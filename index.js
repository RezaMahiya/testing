// Import packages
const express = require("express");
const app = express();
const router = express.Router();
const { google } = require("googleapis");
const date = require('date-and-time');
const path = require("path");
require('dotenv').config();
//const cors = require('cors');
/*const corsConfig = {
	origin : "*",
	credential : true,
	method : ["GET", "POST", "PUT", "DELETE"],
};
*/
//const home = require("./routes/home");
app.use(express.urlencoded({ extended: true }));

// Middlewares
app.use(express.json());
// Routes
//app.use("/home", home);
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
/*
app.get("/", (req, res) => {
res.sendFile('./views/index.html',{root: __dirname});
});
*/
app.post("/", async (req, res) => {

  const {tester} = req.body;

  const now = new Date();
  let tanggal = date.format(now, 'DD/MM/YYYY');
  let waktu = date.format(now,'HH:mm:ss');
     
  const credentialsEnv = process.env.GOOGLE_CREDENTIALS;
  const credentials = JSON.parse(credentialsEnv);

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: credentials.client_email,
      private_key: credentials.private_key.replace(/\\n/g, '\n'), // Handle newlines
      },
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
  
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
