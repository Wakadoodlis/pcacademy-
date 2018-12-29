const passport = require("passport");
const CONFIG = require("../config");
const FacebookTokenStrategy = require("passport-facebook-token");
const UserModel = require("../models/user");

passport.use(
  "facebookToken",
  new FacebookTokenStrategy(
    {
      clientID: CONFIG.OAUTH.FACEBOOK.clientID,
      clientSecret: CONFIG.OAUTH.FACEBOOK.clientSecret
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        console.log("profile", profile);
        console.log("accessToken", accessToken);
        console.log("refreshToken", refreshToken);

        const existingUser = await UserModel.findOne({
          "facebook.id": profile.id
        });
        if (existingUser) {
          return done(null, existingUser);
        }
        const newUser = new UserModel({
          method: "facebook",
          facebook: {
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
