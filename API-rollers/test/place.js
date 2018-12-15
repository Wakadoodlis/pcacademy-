process.env.NODE_ENV = "test";

const chai = require("chai");
const chaiHtpp = require("chai-http");
const app = require("../app");
const CONFIG = require("../config");
const PlaceModel = require("../models/place");

chai.should();
chai.use(chaiHtpp);

describe("place", () => {
  before(done => {
    PlaceModel.remove({}, err => {
      done();
    });
  });

  describe("/GET with unauthorized access", () => {
    it("it should return unauthorized", done => {
      chai
        .request(app)
        .get("/places")
        .end((error, response) => {
          response.should.have.status(401);
          done();
        });
    });
  });

  describe("/GET places", () => {
    it("it should return places", done => {
      chai
        .request(app)
        .get("/places")
        .set("wakaton", CONFIG.TOKEN_TEST)
        .end((error, response) => {
          response.should.have.status(200);
          response.body.should.be.a("array");
          response.body.length.should.be.eql(0);
          done();
        });
    });
  });

  describe("/CREATE place", () => {
    it("it should create new place", done => {
      let place = {
        title: "Karžygių kelias",
        distance: 12,
        condition: "Labai gera. Neseniai įrengtas parkas",
        people: "Žmonių daug. Dažnai su vaikais",
        city: "5c0ffe4ab7014e344c879132"
      };
      chai
        .request(app)
        .post("/places/new")
        .set("wakaton", CONFIG.TOKEN_TEST)
        .send(place)
        .end((error, response) => {
          response.body.should.be.a("object");
          response.body.should.have.property("title");
          response.body.should.have.property("distance");
          response.body.should.have.property("condition");
          response.body.should.have.property("people");
          response.body.should.have.property("city");
          response.body.should.have.property("_id");
          response.should.have.status(200);
          done();
        });
    });
  });

  describe("/GET/:id place", () => {
    it("it should GET a place by the given id", done => {
      let place = new PlaceModel({
        title: "Karžygių kelias",
        distance: 12,
        condition: "Labai gera. Neseniai įrengtas parkas",
        people: "Žmonių daug. Dažnai su vaikais",
        city: ""
        // id: "5c0ffe24b7014e344c879131"
      });
      place.save((err, place) => {
        chai
          .request(app)
          .get("/places/" + place.id)
          .set("wakaton", CONFIG.TOKEN_TEST)
          .send(place)
          .end((error, response) => {
            response.body.should.be.a("object");
            response.body.place.should.have.property("title");
            response.body.place.should.have.property("distance");
            response.body.place.should.have.property("condition");
            response.body.place.should.have.property("people");
            response.body.place.should.have.property("city");
            response.body.should.have
              .property("id")
              .eql("5c0ffe24b7014e344c879131");
            response.should.have.status(200);
            done();
          });
      });
    });
  });

  describe("/DELETE", () => {
    it("it should delete city", done => {
      PlaceModel.findOne({}, (error, place) => {
        console.log("place", place);
        chai
          .request(app)
          .delete("/places/" + place._id)
          .set("wakaton", CONFIG.TOKEN_TEST)
          .end((error, response) => {
            response.should.have.status(200);
            done();
          });
      });
    });
  });

  // describe("/DELETE/:id place", () => {
  //   it("it should DELETE a place given the id", done => {
  //     let place = new Place({
  //       title: "Karžygių kelias",
  //       distance: 12,
  //       condition: "Labai gera. Neseniai įrengtas parkas",
  //       people: "Žmonių daug. Dažnai su vaikais",
  //       city: "",
  //       id: "5c0ffe24b7014e344c879131"
  //     });
  //     place.save((err, place) => {
  //       chai
  //         .request(app)
  //         .delete("/places/5c0ffe24b7014e344c879131")
  //         .end((err, res) => {
  //           res.should.have.status(200);
  //           done();
  //         });
  //     });
  //   });
  // });

  describe("/PUT/:id place", () => {
    it("it should UPDATE a place by the given id", done => {
      let place = new PlaceModel({
        title: "Karžygių kelias",
        distance: 12,
        condition: "Labai gera",
        people: "mazai",
        city: "",
        id: "5c0ffe24b7014e344c879131"
      });
      place.save((err, place) => {
        chai
          .request("server")
          .put("/places/5c0ffe24b7014e344c879131")
          .send({
            title: "Karžygių kelias",
            distance: 9,
            condition: "Labai gera",
            people: "mazai",
            city: "5c0ffe4ab7014e344c879132"
          })
          .end((err, res) => {
            res.should.have.status(200);
            // res.body.should.be.a("object");
            // res.body.should.have.property("distance")
            //   .eql(9);
            done();
          });
      });
    });
  });
});
