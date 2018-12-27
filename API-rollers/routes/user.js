const express = require("express");
const passport = require("passport");
const userController = require("../controllers/user");
const router = express.Router();

router.post(
  "/signup",
  passport.authenticate("signup", { session: false }),
  userController.signUp
);

router.post("/login", userController.login);

router.post(
  "/user/google",
  passport.authenticate("googleToken", { session: false })
);

module.exports = router;
