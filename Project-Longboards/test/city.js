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
    it("it should return city", done => {
      chai
        .request(app)
        .get("/city")
        .set("wakaton", CONFIG.TOKEN_TEST)
        .end((error, response) => {
          response.should.have.status(200);
          response.body.should.be.a("array");
          response.body.length.should.be.eql(0);
          done();
        });
    });
  });

  describe("/CREATE", () => {
    it("it should create city", done => {
      let city = {
        title: "kaunas"
      };
      chai
        .request(app)
        .post("/city/new")
        .set("wakaton", CONFIG.TOKEN_TEST)
        .send(city)
        .end((error, response) => {
          response.body.should.be.a("object");
          response.body.should.have.property("title");
          response.body.should.have.property("_id");
          response.should.have.status(200);
          done();
        });
    });
  });

  describe("/DELETE", () => {
    it("it should delete city", done => {
      chai
        .request(app)
        .delete("/city/")
        .send({
          _id: "5c08133ad835983e30d08761"
        })
        .end((error, response) => {
          response.should.have.status(200);
          response.body.should.be.a("object");
          done();
        });
    });
  });
});
