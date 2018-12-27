const passport = require("passport");
const CONFIG = require("../config");
const GooglePlusTokenStrategy = require("passport-google-plus-token");

passport.use(
  "googleToken",
  new GooglePlusTokenStrategy(
    {
      clinetID:
        "644141863184-gaq0jqehdebfeeldbufkvs50v2tur2bd.apps.googleusercontent.com",
      clientSecret: "XUn5Vk-2U5klFtJ8S8ufLOwB"
    },
    async (accesToken, refreshToken, profile, done) => {}
  )
);
