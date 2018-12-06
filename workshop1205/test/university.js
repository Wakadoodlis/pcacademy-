process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHtpp = require('chai-http');
const app = require('../app');
const CONFIG = require('../config');
const UniversityModel = require('../models/university');

chai.should();
chai.use(chaiHtpp);

describe('University', () => {

     beforeEach(done => {
         UniversityModel.remove({}, err=>{
             done();
         });

        
    });

    describe('/GET', () => {
        it('it should return []', done => {
            chai.request(app)
                .get('/university')
                .end((error, response)=> {
                    response.should.have.status(200);
                    done();
                });
        });
    });

    describe('/CREATE', () => {
        it('it should return university', done => {
            chai.request(app)
                .post('/university')
                .send({
                    'name': 'put',
                    'address': '123'
                  })
                .end((error, response)=> {
                    response.body.should.have.property('name', 'put');
                    done();
                });
        });
    });

     describe('/DELETE', () => {
        it('it should return university', done => {
            chai.request(app)
                .delete('/university')
                .send({
                    '_id': '5c08133ad835983e30d08761'
                  })
                .end((error, response)=> {
                    response.should.have.status(200);
                    done();
                });
        });
    })
});
