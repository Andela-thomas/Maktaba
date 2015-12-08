describe("Service Unit Tests", function() {
  var httpProvider, Auth, Token, token, Interceptor, $httpBackend;
  beforeEach(function() {
    module('services', function($httpProvider) {
      //save our interceptor
      httpProvider = $httpProvider;
    });

    inject(function($injector) {
      Token = $injector.get('Token');
      Auth = $injector.get('Auth');
      Interceptor = $injector.get('Interceptor');
      spyOn(Interceptor, 'request').and.callThrough();
      Interceptor.request();
    });
    token = Token.get();
  });
  describe('Interceptor Tests', function() {

    it('should have RequestService be defined', function() {
      expect(Interceptor).toBeDefined();
    });


    it('should have the RequestService as an interceptor', function() {
      expect(httpProvider.interceptors).toContain('Interceptor');
    });

    it('should call the request method', function() {
      expect(Interceptor.request).toBeDefined();
      expect(Interceptor.request).toHaveBeenCalled();
    });

    it('should token in the headers after setting', function() {
      Auth.setToken(token);
      $httpBackend.when('GET', 'http://localhost:3000', null, function(headers) {
        expect(headers['x-access-token']).toBe(token);
      }).respond(200, {
        name: 'example'
      });
    });

    it('should not place a token in the http request headers if no token is set', function() {
      var config = Interceptor.request({
        headers: {}
      });
      expect(config.headers['x-access-token']).toBe(undefined);
    });

    it('should place a token in the http request headers after a token is set', function() {
      var config = Interceptor.request({
        headers: {}
      });
      expect(config.headers['x-access-token']).toBe('Token token="' + token + '"');
    }); //Mocked HTTP Requests

  }); //RequestService tests

});
