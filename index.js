// Import packages
const express = require("express");
const app = express();
const router = express.Router();
const { google } = require("googleapis");
const date = require('date-and-time');
const cors = require('cors');
const corsConfig = {
	origin : "*",
	credential : true,
	method : ["GET", "POST", "PUT", "DELETE"],
};
const home = require("./routes/home");
const fs = require('fs');

// Middlewares
//const app = express();
//app.use(express.json());

// Routes
//app.use("/home", home);

app.options("", cors(corsConfig));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsConfig));

app.get("/", (req, res) => {
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

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
