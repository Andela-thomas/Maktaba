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
        Users.save($scope.user, function(response) {
          if (!response.errmsg) {
            var message = 'You have been succefully registered. Go to login tab to sign in';
            Materialize.toast(message, 3000);
          } else {
            var error = response.errmsg.substring(49, 57);
            var prefix;
            if (error === 'email_1 ') {
              prefix = 'Email';
            } else {
              prefix = 'Username';
            }
            error = prefix + ' already exist change and try again';
            Materialize.toast(error, 3000);
          }
        });
      };
    }
  ]);
