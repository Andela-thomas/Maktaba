  var request = require('superagent');
  describe('GET/', function() {
    it('should return a json when home route is called', function(done) {
      request
        .get('http://localhost:3000')
        .end(function(err, res) {
          if (res.status === 200) {
            var response = JSON.parse(res.text);
            expect(res.type).toBe('application/json');
            expect(response.message).toBe('welcome to mongoose testing service');
          } else {
            expect(res.status).toBe(404);
          }
          done();
        });
    });
  });
