describe('EventCtrl tests', function() {
  var scope,
    controller, Users, Documents, state;
  beforeEach(function() {
    module('maktaba');
  });

  beforeEach(inject(function($injector) {
    var $controller = $injector.get('$controller');
    scope = $injector.get('$rootScope');
    controller = $controller('DocumentCtrl', {
      $scope: scope
    });
    state = $injector.get('$state');
    Users = $injector.get('Users');
    Documents = $injector.get('Documents');
    spyOn(scope, 'update').and.callThrough();
    spyOn(scope, 'delete').and.callThrough();
    spyOn(scope, 'addDocument').and.callThrough();
    scope.document = {
      _id: '564461fa6946b086251d4fa1',
      title: 'mangotree',
      content: 'i am a document content'
    };

    scope.addDocument();
    scope.update();
    scope.delete();
  }));

  it('should define and call scope.delete', function() {
    expect(scope.delete).toBeDefined();
    expect(scope.delete).toHaveBeenCalled();
  });

  it('should define and call scope.update', function() {
    expect(scope.update).toBeDefined();
    expect(scope.update).toHaveBeenCalled();
  });

  it('should define and call scope.delete', function() {
    expect(scope.delete).toBeDefined();
    expect(scope.delete).toHaveBeenCalled();
  });

  it('should define $scope.document', function() {
    expect(scope.document).toBeDefined();
    expect(typeof scope.document).toBe('object');
  });

  it('should define Users.get', function() {
    expect(Users.get()).toBeDefined();
    expect(typeof Users.get()).toBe('object');
  });
});
