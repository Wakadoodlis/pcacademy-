// process.env.NODE_ENV = "test";

// const chai = require("chai");
// const chaiHtpp = require("chai-http");
// const app = require("../app");
// const CONFIG = require("../config");
// const PlaceModel = require("../models/place");

// chai.should();
// chai.use(chaiHtpp);

// describe("place", () => {
//   beforeEach(done => {
//     PlaceModel.remove({}, err => {
//       done();
//     });
//   });

//   describe("/GET with unauthorized access", () => {
//     it("it should return unauthorized", done => {
//       chai
//         .request(app)
//         .get("/students")
//         .end((error, response) => {
//           response.should.have.status(401);
//           done();
//         });
//     });
//   });

//   describe("/GET places", () => {
//     it("it should return places", done => {
//       chai
//         .request(app)
//         .get("/places")
//         .set("wakaton", CONFIG.TOKEN_TEST)
//         .end((error, response) => {
//           response.should.have.status(200);
//           response.body.should.be.a("array");
//           response.body.length.should.be.eql(0);
//           done();
//         });
//     });
//   });

//   describe("/CREATE", () => {
//     it("it should return place", done => {
//       chai
//         .request(app)
//         .post("/place")
//         .send({
//           name: "put",
//           address: "123"
//         })
//         .end((error, response) => {
//           response.body.should.have.property("name", "put");
//           done();
//         });
//     });
//   });

//   describe("/DELETE", () => {
//     it("it should return place", done => {
//       chai
//         .request(app)
//         .delete("/place")
//         .send({
//           _id: "5c08133ad835983e30d08761"
//         })
//         .end((error, response) => {
//           response.should.have.status(200);
//           done();
//         });
//     });
//   });
// });
