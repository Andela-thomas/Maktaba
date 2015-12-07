describe('HomeCtrl tests', function() {
  var scope,
    controller;
  beforeEach(function() {
    module('maktaba');
  });

  beforeEach(inject(function($injector) {
    $controller = $injector.get('$controller');
    scope = $injector.get('$rootScope');
    controller = $controller('HomeCtrl', {
      $scope: scope
    });
    spyOn(scope, 'init').and.callThrough();
    scope.init();
  }));
  it('should inititiate the parralax', function() {
    expect(scope.init).toBeDefined();
    expect(scope.init).toHaveBeenCalled();
  });
});
