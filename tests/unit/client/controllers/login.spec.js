describe('Login user tests', function() {
  var scope,
    Users,
    Auth,
    controller;

  beforeEach(function() {
    module('maktaba');
  });

  beforeEach(module(function($provide) {
    scope = {
      user: {
        email: 'mango@tree.plant',
        password: 'password'

      }
    };
    $provide.value('$scope', scope);
  }));

  beforeEach(inject(function($injector) {
    $controller = $injector.get('$controller');
    Users = $injector.get('Users');
    Auth = $injector.get('Auth');
    controller = $controller('LoginCtrl');
    spyOn(Users, 'login').and.callThrough();
    spyOn(Auth, 'setToken').and.callThrough();
    spyOn(scope, 'login').and.callThrough();
    scope.login();
    scope.register();
    Auth.setToken();
  }));

  it('should define and call $scope.login', function() {
    expect(scope.login).toBeDefined();
    expect(scope.login).toHaveBeenCalled();
  });

  it('should define and call Auth.setToken', function() {
    expect(Auth.setToken).toBeDefined();
    expect(Auth.setToken).toHaveBeenCalled();
  });
});
