describe('Users Service Test', function() {

  beforeEach(function() {
    module('maktaba');
  });

  var Users, $http;
  beforeEach(inject(function($injector) {
    Users = $injector.get('Users');
    $http = $injector.get('$http');
    spyOn(Users, 'login').and.callThrough();
    spyOn(Users, 'user').and.callThrough();
    spyOn(Users, 'getDocument').and.callThrough();
    spyOn(Users, 'logout').and.callThrough();

    Users.login();
    Users.user();
    Users.getDocument();
    Users.logout();
  }));

  describe('Users unit tests', function() {
    it('Login function should be defined and called', function() {
      expect(Users.login).toBeDefined();
      expect(Users.login).toHaveBeenCalled();
    });

    it('user function should be defined and called', function() {
      expect(Users.user).toBeDefined();
      expect(Users.user).toHaveBeenCalled();
    });

    it('get Document  function should be defined and called', function() {
      expect(Users.getDocument).toBeDefined();
      expect(Users.getDocument).toHaveBeenCalled();
    });

    it('logout function shuold be defined and called', function() {
      expect(Users.logout).toBeDefined();
      expect(Users.logout).toHaveBeenCalled();
    });

    it('$http and its method post should be defined', function() {
      expect($http.post).toBeDefined();
      expect(typeof $http.post).toBe('function');
    });
  });
});
