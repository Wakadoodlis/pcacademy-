const passport = require("passport");
const CONFIG = require("../config");
const GooglePlusTokenStrategy = require("passport-google-plus-token");
const UserModel = require("../models/user");

passport.use(
  "googleToken",
  new GooglePlusTokenStrategy(
    {
      clientID: CONFIG.OAUTH.GOOGLE.clientID,
      clientSecret: CONFIG.OAUTH.GOOGLE.clientSecret
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
