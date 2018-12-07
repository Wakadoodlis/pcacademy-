const University = require("../models/university");
const boom = require("boom");

exports.create = async function(request, response, next) {
  try {
    let university = new University({
      name: request.body.name,
      address: request.body.address
    });

    let result = await university.save();
    response.send(result);
  } catch (error) {
    next(boom.badData(error));
  }
};

exports.get = async function(request, response) {
  let universities = await University.find().populate("lectors");
  response.send(universities);
};

exports.delete = async function(request, response, next) {
  try {
    let universities = await University.findByIdAndDelete(request.body.id);
    response.send(universities);
  } catch (error) {
    next(boom.badData(error));
  }
};
