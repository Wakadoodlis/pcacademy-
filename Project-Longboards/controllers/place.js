const Place = require("../models/place");

// Create new place
exports.create = function(request, response) {
  let place = new Place({
    title: request.body.title,
    distance: request.body.distance,
    condition: request.body.condition,
    people: request.body.people
  });

  place.save(() => {
    response.send("Place saved succesfully!");
  });
};

// Get all places
exports.get = function(request, response) {
  Place.find((err, places) => {
    if (err) {
      throw err;
    }
    response.send(places);
  });
};

// Get one place by ID
exports.getById = function(request, response) {
  Place.findById(request.params._id, (err, place) => {
    if (err) {
      throw err;
    }
    response.send(place);
  });
};

// Update place
exports.updatePlace = function(request, response) {
  const query = { _id: request.params._id };
  Place.findOneAndUpdate(
    query,
    request.body,
    { upsert: true },
    (err, place) => {
      if (err) {
        throw err;
      }
      response.send(place);
    }
  );
};

// delete place
exports.deletePlace = function(request, response) {
  const query = { _id: request.params._id };
  Place.findOneAndDelete(query, (err, place) => {
    if (err) {
      throw err;
    }
    response.send(place);
  });
};
