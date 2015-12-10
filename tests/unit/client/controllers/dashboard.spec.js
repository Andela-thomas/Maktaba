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
    scope.documents = [];
    spyOn(scope, 'readMore').and.callThrough();
    spyOn(scope, 'getDocuments').and.callThrough();
    spyOn(scope, 'view').and.callThrough();
    spyOn(Users, 'getDocument').and.callThrough();
    Users.query();
    scope.readMore();
    scope.view();
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

  it('should define and call $scope.getDocuments', function() {
    expect(scope.getDocuments).toBeDefined();
    expect(scope.getDocuments).toHaveBeenCalled();
  });

  it('should define and call scope.view', function() {
    expect(scope.view).toBeDefined();
    expect(scope.view).toHaveBeenCalled();
  });

});
