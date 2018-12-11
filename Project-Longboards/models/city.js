const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let CitySchema = new Schema(
  {
    title: { type: String, required: true }
  },
  { toJSON: { virtuals: true } }
);

module.exports = mongoose.model("City", CitySchema);
