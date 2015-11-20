angular.module('maktaba.services')
  .factory('Auth', ['Token', function(Token) {
    return {
      isLoggedIn: function(token) {
        if (Token.get()) {
          return true;
        } else {
          return false;
        }
      },
      setToken: function(token) {
        Token.set(token);
      },
      getToken: function() {
        return Token.get();
      },
      logout: function() {
        Token.set();
      }
    };
  }])
  .factory('Token', ['$window', function($window) {
    return {
      get: function() {
        return $window.localStorage.getItem('token');
      },
      set: function(token) {
        if (token) {
          $window.localStorage.setItem('token', token);
        } else {
          $window.localStorage.removeItem('token');
        }
      }
    };
  }])
  .factory('Interceptor', ['Token', function(Token) {
    var tokenInjector = {
      request: function(config) {
        var token = Token.get();
        if (token) {
          config.headers['x-access-token'] = token;
        }
        return config;
      }
    };
    return tokenInjector;
  }]);
