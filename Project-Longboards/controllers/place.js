const Place = require("../models/place");

exports.create = function(request, response) {
  let place = new Place({
    title: request.body.title
    // title: "kauno kazkas",
    // adress: "kaunas",
    // track_length: 3
    // adress: request.body.adress,
    // track_length: request.body.length,
    // map_url: equest.body.mapUrl,
    // img_url: equest.body.imgUrl
  });

  place.save(() => {
    response.send("Place saved succesfully!");
  });
};

exports.get = function(request, response) {
  Place.find((err, places) => {
    response.send(places);
  });
};

// "http://www.maps.lt/map/default.aspx?lang=lt#q=azuolyno%20parkas"

// "https://www.google.lt/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwinqJbEzoPfAhUntosKHaWjDHUQjRx6BAgBEAU&url=http%3A%2F%2Fm.klaipeda.diena.lt%2Fgalerijos%2Fvaizdai%2Fazuolyno-parkas-629241&psig=AOvVaw3-OeWOW-Xt-Tt5WEpjlXRx&ust=1543924852029176"
