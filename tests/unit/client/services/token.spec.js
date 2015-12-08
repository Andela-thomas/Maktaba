describe('Token Service Test', function() {

  beforeEach(function() {
    module('maktaba');
  });
  // instantiate controller with mock window
  var Token,
    $window;
  beforeEach(inject(function($injector) {
    Token = $injector.get('Token');
    $window = $injector.get('$window');
    spyOn(Token, 'get').and.callThrough();
    spyOn(Token, 'set').and.callThrough();
    Token.set();
    Token.get();
  }));

  describe('Token unit tests', function() {
    it('set should be a function', function() {
      expect(Token.set).toBeDefined();
      expect(Token.set).toHaveBeenCalled();
    });

    it('get should be a function', function() {
      expect(Token.get).toBeDefined();
      expect(Token.get).toHaveBeenCalled();
    });
  });
});
