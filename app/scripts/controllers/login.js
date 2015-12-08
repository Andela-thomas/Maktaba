angular.module('maktaba.controllers')
  .controller('LoginCtrl', ['$rootScope', '$scope', '$location', 'Users', 'Auth',
    function($rootScope, $scope, $location, Users, Auth) {
      // initilaize the accordion
      $('.collapsible').collapsible();
      $('select').material_select();
      // login
      $scope.login = function() {
        Users.login($scope.user, function(err, res) {
          if (res.token) {
            Auth.setToken(res.token);
            // toast message
            Materialize.toast(res.message, 5000);
            $location.path('/dashboard');
          } else {
            Materialize.toast(res.message, 5000);
          }
        });
      };


      // register user
      $scope.register = function() {
        Users.save($scope.user, /* istanbul ignore next */ function(response) {
          if (!response.errmsg) {
            Materialize.toast('Login succesfull', 3000);
          } else {
            Materialize.toast('Invalid username or password', 3000);
          }
        });
      };
    }
  ]);
