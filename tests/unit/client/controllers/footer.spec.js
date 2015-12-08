describe('EventCtrl tests', function() {
  var scope, controller;
  beforeEach(function() {
    module('maktaba');
  });

  beforeEach(inject(function($injector) {
    var $controller = $injector.get('$controller');
    scope = $injector.get('$rootScope');
    controller = $controller('FooterCtrl', {
      $scope: scope
    });
  }));

  it('should define scope.discover', function() {
    expect(scope.footer).toBeDefined();
    expect(typeof scope.footer).toBe('object');
    expect(scope.footer.appName).toBe('Maktaba');
    expect(scope.footer.description).toBe('This is one bad ass document management system');
  });
});
