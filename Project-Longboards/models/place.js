const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// PLACE SCHEMA
let PlaceSchema = new Schema(
  {
    title: { type: String, required: true },
    distance: { type: Number, required: true },
    condition: { type: String, required: true },
    people: { type: String, required: true },
    create_date: { type: Date, default: Date.now },
    city: { type: Schema.Types.ObjectId, ref: "City", required: true }
  },
  { toJSON: { virtuals: true } }
);

// PlaceSchema.virtual('students', {
//   ref: 'Student',
//   localField: '_id',
//   foreignField: 'lector'
// })

module.exports = mongoose.model("Place", PlaceSchema);
