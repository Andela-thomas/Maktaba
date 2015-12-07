describe('Dashboard controller  tests', function() {
  var scope, state, location, Users, controller;

  beforeEach(function() {
    module('maktaba');
  });

  beforeEach(inject(function($injector) {
    $controller = $injector.get('$controller');
    scope = $injector.get('$rootScope');
    Users = $injector.get('Users');
    state = $injector.get('$state');
    location = $injector.get('$location');
    controller = $controller('DashboardCtrl', {
      $scope: scope
    });
    spyOn(scope, 'readMore').and.callThrough();
    spyOn(Users, 'getDocument').and.callThrough();
    Users.query();
    scope.readMore();
    Users.getDocument();
  }));



  it('should define developers users', function() {
    expect(scope.users).toBeDefined();
    expect(typeof scope.users).toBe('object');
  });

  it('should define and call $scope.readMore', function() {
    expect(scope.readMore).toBeDefined();
    expect(scope.readMore).toHaveBeenCalled();
  });

  it('should define and call Users.getDocument', function() {
    console.log(scope.documents);
    expect(Users.getDocument).toBeDefined();
    expect(Users.getDocument).toHaveBeenCalled();
  });

});
