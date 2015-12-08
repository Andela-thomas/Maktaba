describe('Header ctrl tests', function() {
  var scope,
    controller, state, window, Auth;
  beforeEach(function() {
    module('maktaba');
  });

  beforeEach(inject(function($injector) {
    $controller = $injector.get('$controller');
    scope = $injector.get('$rootScope');
    controller = $controller('HeaderCtrl', {
      $scope: scope
    });
    state = $injector.get('$state');
    window = $injector.get('$window');
    Auth = $injector.get('Auth');
    spyOn(scope, 'logout').and.callThrough();
    spyOn(scope, 'goto').and.callThrough();
    spyOn(Auth, 'logout').and.callThrough();
    scope.logout();
    scope.goto();
    Auth.logout();
  }));

  it('should define and call scope.logout', function() {
    expect(scope.logout).toBeDefined();
    expect(typeof scope.logout).toBe('function');
  });

  it('should define and call scope.goto', function() {
    expect(scope.goto).toBeDefined();
    expect(scope.goto).toHaveBeenCalled();
  });

  it('should define and call scope.goto', function() {
    expect(Auth.logout).toBeDefined();
    expect(Auth.logout).toHaveBeenCalled();
  });
});
