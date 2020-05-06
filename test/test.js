const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const jsonServer = require('json-server');
const app = jsonServer.create('./api/db.json');
const router = jsonServer.router('./api/router.json');
const middlewares = jsonServer.defaults();
var expect = chai.expect;
let server;

chai.use(chaiHttp);


describe('Run local api test', function() {


  describe('test that local server is running', function() {
    before(function() {
      // run a local json server
      app.use(middlewares);
      app.use(router);
      server = app.listen(3000, () => {
        console.log('JSON Server is running');
      });
    });

    it('should return some sort of json data', function(done) {
      chai.request(server)
      .get('/forecasts')
      .end(function(err, res) {
        expect(res).to.be.json;
        done();
      });
    });

    after(function(){
      server.close(function () {
        console.log('tests done, server closing');
      });
    })
  });
});
