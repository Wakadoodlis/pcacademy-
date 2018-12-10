process.env.NODE_ENV = "test";

const chai = require("chai");
const chaiHtpp = require("chai-http");
const app = require("../app");
const CONFIG = require("../config");
const CityModel = require("../models/city");

chai.should();
chai.use(chaiHtpp);

describe("City", () => {
  beforeEach(done => {
    CityModel.remove({}, err => {
      done();
    });
  });

  describe("/GET", () => {
    it("it should return []", done => {
      chai
        .request(app)
        .get("/city")
        .end((error, response) => {
          response.should.have.status(200);
          done();
        });
    });
  });

  describe("/CREATE", () => {
    it("it should return city", done => {
      chai
        .request(app)
        .post("/city")
        .send({
          title: "put"
        })
        .end((error, response) => {
          response.body.should.have.property("title", "put");
          done();
        });
    });
  });

  describe("/DELETE", () => {
    it("it should return city", done => {
      chai
        .request(app)
        .delete("/city")
        .send({
          _id: "5c08133ad835983e30d08761"
        })
        .end((error, response) => {
          response.should.have.status(200);
          done();
        });
    });
  });
});
