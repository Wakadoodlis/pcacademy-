const express = require("express");
const passport = require("passport");
const userController = require("../controllers/user");
const router = express.Router();
const googlePlus = require("../authentication/googlePlus");
const facebookOAuth = require("../authentication/facebookOAuth");
const passportGoogle = passport.authenticate("googleToken", { session: false });

const passportFacebook = passport.authenticate("facebookToken", {
  session: false
});

router.post(
  "/signup",
  passport.authenticate("signup", { session: false }),
  userController.signUp
);

router.post("/login", userController.login);

router.post("/google", passportGoogle, userController.googleOAuth);

router.post("/facebook", passportFacebook, userController.facebookOAuth);

module.exports = router;
