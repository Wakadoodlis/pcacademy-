const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// PLACE SCHEMA
let PlaceSchema = new Schema(
  {
    title: { type: String },
    distance: { type: Number },
    condition: { type: String },
    description: { type: String },
    people: { type: String },
    create_date: { type: Date, default: Date.now },
    city: { type: Schema.Types.ObjectId, ref: "City" }
  },
  { toJSON: { virtuals: true } }
);

module.exports = mongoose.model("Place", PlaceSchema);
