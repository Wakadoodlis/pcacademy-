const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

let UserSchema = new Schema({
  method: {
    type: String,
    enum: ["local", "google", "facebook"],
    required: true
  },
  local: {
    email: { type: String },
    password: { type: String }
  },
  google: {
    id: {
      type: String
    },
    email: {
      type: String,
      lowercase: true
    }
  },
  facebook: {
    id: {
      type: String
    },
    email: {
      type: String,
      lowercase: true
    }
  }
});

UserSchema.pre("save", createHashedPassword);

async function createHashedPassword(next) {
  try {
    if (this.method !== "local") {
      next();
    }
    this.local.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    next(error);
  }
}

UserSchema.methods.isValidPassword = async function(password) {
  try {
    return await bcrypt.compare(password, this.local.password);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = mongoose.model("User", UserSchema);
