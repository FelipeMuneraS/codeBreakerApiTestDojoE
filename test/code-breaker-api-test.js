const supertest = require('supertest'),chai = require('chai'),   
    should = require('should'), asser = require('assert');

app = require('../app/./app.js');

const request=supertest(app);
const expect = chai.expect;

describe('GET /setsecret:number', () => {
    
    it('should return code 200', (done) => {

        request.get('/setsecret/1234')
            .expect(200)
            .end((err, res) => {
                if(err) return document(err);
                done(err);
            });

    });

    it('should return JSON content type', (done) => {
        request.get('/setsecret/1234')
            .expect(200)
            .expect('Content-type',/json/)
            .end((err, res) => {
                if(err) return document(err);
                done(err);
            });
    });

    it('should return JSON content type', (done) => {

        request.get('/setsecret/1234')
            .expect(200)
            .expect('Content-type',/json/)
            .end((err, res) => {
                if(err) return document(err);
                should.not.exist(err);
                should.exist(res);
                res.body.should.be.an.Object;
                should.exist(res.body.message);
                done();
            });
    });

    it('should return correct message', (done) => {
        request.get('/setsecret/1234')
            .expect(200)
            .expect('Content-type',/json/)
            .end((err, res) => {
                if(err) return document(err)
                should.not.exist(err);
                should.exist(res);
                res.body.should.be.an.Object;
                should.exist('ok, Let the game begins', res.body.message);
                done();
            });
    });
});

describe('GET /guess/:number', () => {

    it('should return code 200', (done) => {
        request.get('/guess/1234')
            .expect(200)
            .end((err, res) => {
                if(err) return document(err);
                done(err);
            });
    });

    it('should return JSON content type', (done) => {
        request.get('/guess/1234')
            .expect(200)
            .expect('Content-type',/json/)
            .end((err, res) => {
                if(err) return document(err);
                done(err);
            });

    });

    it('should return JSON content type', (done) => {
        request.get('/guess/1234')
            .expect(200)
            .expect('Content-type',/json/)
            .end((err, res) => {
                if(err) return document(err)
                should.not.exist(err);
                should.exist(res);
                res.body.should.be.an.Object;
                should.exist(res.body.result);
                assert.equal('XXXX', res.body.result);
                done();
            });
    });
});