const passport = require("passport");
const CONFIG = require("../config");
const GooglePlusTokenStrategy = require("passport-google-plus-token");
const UserModel = require("../models/user");

passport.use(
  "googleToken",
  new GooglePlusTokenStrategy(
    {
      clientID:
        "644141863184-gaq0jqehdebfeeldbufkvs50v2tur2bd.apps.googleusercontent.com",
      clientSecret: "XUn5Vk-2U5klFtJ8S8ufLOwB"
    },
    async (accesToken, refreshToken, profile, done) => {
      try {
        console.log("profile", profile);
        console.log("accessToken", accesToken);
        console.log("refreshToken", refreshToken);

        const existingUser = await UserModel.findOne({
          "google.id": profile.id
        });
        if (existingUser) {
          return done(null, existingUser, {
            message: "This user is already in DB"
          });
        }
        const newUser = new UserModel({
          method: "google",
          google: {
            id: profile.id,
            email: profile.emails[0].value
          }
        });
        await newUser.save();
        done(null, newUser);
      } catch (error) {
        done(error, false, error.message);
      }
    }
  )
);
