describe('Interceptor tests', function() {
  var httpProvider, Auth, Token, token, Interceptor;
  beforeEach(function() {
    module('maktaba', function($httpProvider) {
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
    token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9';
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
  }); //RequestService tests

});
