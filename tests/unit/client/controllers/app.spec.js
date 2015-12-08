describe('app.run test tests', function() {
  var scope, Users, Auth;
  beforeEach(function() {
    module('maktaba');
  });

  beforeEach(inject(function($injector) {
    scope = $injector.get('$rootScope');
    Users = $injector.get('Users');
    Auth = $injector.get('Auth');
    spyOn(Users, 'user').and.callThrough();
    spyOn(Auth, 'isLoggedIn').and.callThrough();
    Users.user();
    Auth.isLoggedIn();
  }));

  it('should define and call Users.logout', function() {
    expect(Users.user).toBeDefined();
    expect(Users.user).toHaveBeenCalled();
  });

  it('should define and call Auth.isLoggedIn', function() {
    expect(Auth.isLoggedIn).toBeDefined();
    expect(Auth.isLoggedIn).toHaveBeenCalled();
  });
});
