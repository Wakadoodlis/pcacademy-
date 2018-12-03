const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// PLACE SCHEMA
let PlaceSchema = new Schema({
  title: { type: String, required: true, max: 200 },
  adress: [
    {
      city: { type: String, required: true, max: 100 },
      street: { type: String, required: true },
      post_code: { type: Number }
    }
  ],
  track_length: { type: Number },
  map_url: { type: String, required: true },
  img_url: { type: String },
  create_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Place", PlaceSchema);
