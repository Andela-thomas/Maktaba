  var request = require('superagent');
  describe('GET/', function() {
    it('should return a json when home route is called', function(done) {
      request
        .get('http://localhost:3000')
        .end(function(err, res) {
          if (res.status === 200) {
            expect(res.text).toBeDefined();
            expect(res.type).toBe('text/html');
          } else {
            expect(res.status).toBe(404);
          }
          done();
        });
    });
  });
