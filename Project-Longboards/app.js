const express = require("express");
const CONFIG = require("./config");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const placeRoute = require("./routes/place");
const cityRoute = require("./routes/city");
const errorHandler = require("./errorHandler");
// const placeRoute = require("./routes/place");
// const userRout = require("./routes/user");

// connecting to DB
mongoose.connect(CONFIG.CONNECTION_STRING);
mongoose.Promise = global.Promise;
mongoose.connection
  .once("open", () => {
    console.log("connection has been made!");
  })
  .on("err", err => {
    console.log("connection error: ", err);
  });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(errorHandler);
app.use("/places", placeRoute);
app.use("/city", cityRoute);
// app.use("/places", placeRoute);
// app.use("/users", userRoute);

app.listen(CONFIG.PORT, () => {
  console.log("server started succesfully!");
});
