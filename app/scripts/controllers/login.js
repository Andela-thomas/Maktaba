angular.module('maktaba.controllers')
  .controller('LoginCtrl', ['$rootScope', '$scope', '$location', 'Users', 'Auth',
    function($rootScope, $scope, $location, Users, Auth) {
      // initilaize the accordion
      $('.collapsible').collapsible();
      $('select').material_select();
      // login
      $scope.login = function() {
        Users.login($scope.user,
          /* istanbul ignore next */
          function(err, res) {
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
        Users.save($scope.user, /* istanbul ignore next */ function(res) {
          if (res.token) {
            Auth.setToken(res.token);
            // toast message
            Materialize.toast('Login successful', 5000);
            $location.path('/dashboard');
          } else {
            Materialize.toast('Username or password already exist', 3000);
          }
        }, /* istanbul ignore next */ function(err) {
          if (err) {
            Materialize.toast('Signup failed, check your details and try again', 3000);
          }
        });
      };
    }
  ]);
