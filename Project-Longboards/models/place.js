const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// PLACE SCHEMA
let PlaceSchema = new Schema({
  title: { type: String, required: true },
  distance: { type: Number, required: true },
  condition: { type: String, required: true },
  people: { type: String, required: true },
  create_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Place", PlaceSchema);
