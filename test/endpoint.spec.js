var app = require('../index.js');
var request = require('supertest').agent(app.listen())

describe('app endpoint', function() {
  it('should return a 200 on a get to "/"', function(done) {
    request.get('/')
      .expect(200, done)
  });
});
