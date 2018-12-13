const City = require("../models/city");
const boom = require("boom");

exports.create = async function(request, response, next) {
  try {
    let city = new City({
      title: request.body.title
    });
    let result = await city.save();
    response.send(result);
  } catch (error) {
    next(boom.badData(error));
  }
};

exports.get = async function(request, response) {
  try {
    let cities = await City.find().populate("places");
    response.send(cities);
  } catch (error) {
    next(boom.badData(error));
  }
};

exports.deleteCity = async function(request, response, next) {
  try {
    const query = { _id: request.params._id };
    let cities = await City.findByIdAndDelete(query);
    response.send(cities);
  } catch (error) {
    next(boom.badData(error));
  }
};
