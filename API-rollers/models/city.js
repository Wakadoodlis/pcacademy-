const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let CitySchema = new Schema(
  {
    title: { type: String, required: true }
  },
  { toJSON: { virtuals: true } }
);

CitySchema.virtual("places", {
  ref: "Place",
  localField: "_id",
  foreignField: "city"
});

module.exports = mongoose.model("City", CitySchema);
