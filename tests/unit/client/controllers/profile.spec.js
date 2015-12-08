describe('Profile controller tests', function() {
  var scope, controller, Users;
  beforeEach(function() {
    module('maktaba');
  });

  beforeEach(inject(function($injector) {
    var $controller = $injector.get('$controller');
    scope = $injector.get('$rootScope');
    Users = $injector.get('Users');
    controller = $controller('ProfileCtrl', {
      $scope: scope
    });
    spyOn(scope, 'editProfile').and.callThrough();
    spyOn(scope, 'updateUser').and.callThrough();
    spyOn(scope, 'get').and.callThrough();
    scope.editProfile();
    scope.updateUser();
    scope.get();
    Users.query();
  }));

  it('should define scope.users', function() {
    expect(scope.users).toBeDefined();
    expect(typeof scope.users).toBe('object');
  });

  it('scope.editProfile should be defined and called', function() {
    expect(scope.editProfile).toBeDefined();
    expect(scope.editProfile).toHaveBeenCalled();
  });
  it('scope.editProfile should be defined and called', function() {
    expect(scope.get).toBeDefined();
    expect(scope.get).toHaveBeenCalled();
  });

  it('scope.updateUser should be a defined and called', function() {
    expect(scope.updateUser).toBeDefined();
    expect(scope.updateUser).toHaveBeenCalled();
  });


});
