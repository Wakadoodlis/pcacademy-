const express = require("express");
const passport = require("passport");
const userController = require("../controllers/user");
const router = express.Router();
const googlePlus = require("../authentication/googlePlus");
const passportGoogle = passport.authenticate("googleToken", { session: false });

router.post(
  "/signup",
  passport.authenticate("signup", { session: false }),
  userController.signUp
);

router.post("/login", userController.login);

router.post("/google", passportGoogle, userController.googleOAuth);

module.exports = router;
