const express = require("express");
const CONFIG = require("./config");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const placeRoute = require("./routes/place");
const cityRoute = require("./routes/city");
const errorHandler = require("./errorHandler");
const userRoute = require("./routes/user");
const passport = require("passport");
const facebookPassport = require("passport-facebook");
require("./authentication/jwtStrategy");
require("./authentication/localStrategy");

if (process.env.NODE_ENV && process.env.NODE_ENV === "test") {
  mongoose.connect(CONFIG.CONNECTION_STRING_TEST);
} else {
  mongoose.connect(CONFIG.CONNECTION_STRING);
  mongoose.connection
    .once("open", () => {
      console.log("connection has been made!");
    })
    .on("err", err => {
      console.log("connection error: ", err);
    });
}

mongoose.Promise = global.Promise;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(errorHandler);
app.use("/places", placeRoute);
app.use("/city", cityRoute);
app.use("/user", userRoute);

app.listen(CONFIG.PORT, () => {
  console.log("server started succesfully!");
});

module.exports = app;
// passport.authenticate("jwt", { session: false })
