const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let UniversitySchema = new Schema({
    name: {type: String, required: true, max: 100},
    address: {type: String, required: true}
}, {toJSON: {virtuals: true}});

module.exports = mongoose.model('University', UniversitySchema);