const express = require("express");
const CONFIG = require("./config");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const place = require("./routes/place");

mongoose.connect(CONFIG.CONNECTION_STRING);
mongoose.Promise = global.Promise;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/places", place);

app.listen(CONFIG.PORT, () => {
  console.log("server started succesfully!");
});
