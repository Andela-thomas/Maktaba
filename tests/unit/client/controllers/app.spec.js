describe('app.run test tests', function() {
  var scope, Users, Auth;
  beforeEach(function() {
    module('maktaba');
  });

  beforeEach(inject(function($injector) {
    scope = $injector.get('$rootScope');
    Users = $injector.get('Users');
    Auth = $injector.get('Auth');
    spyOn(Users, 'session').and.callThrough();
    spyOn(Auth, 'isLoggedIn').and.callThrough();
    Users.session();
    Auth.isLoggedIn();
  }));

  it('should define and call Users.logout', function() {
    expect(Users.session).toBeDefined();
    expect(Users.session).toHaveBeenCalled();
  });

  it('should define and call Auth.isLoggedIn', function() {
    expect(Auth.isLoggedIn).toBeDefined();
    expect(Auth.isLoggedIn).toHaveBeenCalled();
  });
});
