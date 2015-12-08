describe('Auth Service Test', function() {

  beforeEach(function() {
    module('maktaba');
  });

  var Auth,
    Token;
  beforeEach(inject(function($injector) {
    Auth = $injector.get('Auth');
    Token = $injector.get('Token');
    Token = $injector.get('Token');
    spyOn(Auth, 'logout').and.callThrough();
    spyOn(Auth, 'setToken').and.callThrough();
    spyOn(Auth, 'getToken').and.callThrough();
    spyOn(Auth, 'isLoggedIn').and.callThrough();
    Auth.isLoggedIn();
    Auth.getToken();
    Auth.setToken();
    Auth.logout();

  }));

  describe('Auth unit tests', function() {
    it('isLoggedIn should be a function', function() {
      expect(Auth.isLoggedIn).toBeDefined();
      expect(Auth.isLoggedIn).toHaveBeenCalled();
    });

    it('setToken should be a function', function() {
      expect(Auth.setToken).toBeDefined();
      expect(Auth.setToken).toHaveBeenCalled();
    });

    it('getToken should be a function', function() {
      expect(Auth.getToken).toBeDefined();
      expect(Auth.getToken).toHaveBeenCalled();
    });

    it('logout should be a function and be defined', function() {
      expect(Auth.logout).toBeDefined();
      expect(Auth.logout).toHaveBeenCalled();
    });
  });
});
