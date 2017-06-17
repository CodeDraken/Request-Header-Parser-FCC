const expect = require('expect');
const request = require('supertest');

const { app } = require('../');

describe('API', () => {

  it('gives back an IP address, language, and operating system', (done) => {
    request(app)
      .get('/api/whoami')
      .expect(200)
      .expect(res => {
        expect(res.body.address).toBeA('string');
        expect(res.body.language).toExist();
        expect(res.body.os).toBeA('string');
        expect(res.body.browser).toBeA('string');
        expect(res.body.browserVersion).toBeA('string');
      })
      .end(done);
  });

});
