const passport = require("passport");
const jwt = require("jsonwebtoken");
const CONFIG = require("../config");

signToken = user => {
  return jwt.sign(
    {
      iss: "CodeWorkr",
      sub: user.id,
      iat: new Date().getTime(), // current time
      exp: new Date().setDate(new Date().getDate() + 1) // current time + 1 day ahead
    },
    CONFIG.JWT_SECRET
  );
};

exports.signUp = async function(request, response) {
  response.json({
    message: "Sign up sucessful",
    user: request.user
  });
};

exports.login = async function(request, response) {
  passport.authenticate("login", async (error, user, info) => {
    try {
      if (error || !user) {
        response.send(info);
      }

      request.login(user, { session: false }, async error => {
        if (error) {
          response.send(error);
        }
        const body = { _id: user._id, email: user.email };
        const token = jwt.sign({ user: body }, CONFIG.JWT_SECRET);
        response.json({ token });
      });
    } catch (err) {
      response.send(err.message);
    }
  })(request, response);
};

exports.googleOAuth = async function(req, res, next) {
  try {
    const token = signToken(req.user);
    res.status(200).json({ token });
  } catch (error) {
    next(error, false, error.message);
  }
};
