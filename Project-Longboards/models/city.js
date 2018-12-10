const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let CitySchema = new Schema({
  title: { type: String, required: true }
});

module.exports = mongoose.model("Place", CitySchema);
