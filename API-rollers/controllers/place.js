const Place = require("../models/place");
const boom = require("boom");

// Create new place
exports.create = async function(request, response, next) {
  try {
    let place = new Place({
      title: request.body.title,
      distance: request.body.distance,
      condition: request.body.condition,
      people: request.body.people,
      city: request.body.city
    });
    let result = await place.save();
    response.send(result);
  } catch (error) {
    next(boom.badData(error));
  }
};

exports.get = async function(request, response) {
  try {
    let places = await Place.find().populate("city");
    response.send(places);
  } catch (error) {
    next(boom.badData(error));
  }
};

exports.getById = async function(request, response, next) {
  try {
    const query = { _id: request.params._id };
    let places = await Place.findById(query);
    response.send(places);
  } catch (error) {
    next(boom.badData(error));
  }
};

exports.updatePlace = async function(request, response, next) {
  try {
    const query = { _id: request.params._id };
    let places = await Place.findByIdAndUpdate(query, request.body);
    response.send(places);
  } catch (error) {
    next(boom.badData(error));
  }
};

exports.deletePlace = async function(request, response, next) {
  try {
    const query = { _id: request.params._id };
    let places = await Place.findByIdAndDelete(query);
    response.send(places);
  } catch (error) {
    next(boom.badData(error));
  }
};
