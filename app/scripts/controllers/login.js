angular.module('maktaba.controllers')
  .controller('LoginCtrl', ['$rootScope', '$scope', '$state', 'Users',
    function($rootScope, $scope, $state, Users) {
      // initilaize the accordion
      $('.collapsible').collapsible();

      $scope.logout = function() {
        Users.logout($scope.user, function(err, res) {
          if (!err) {
            delete $rootScope.currentUser;
            $state.go('login');
          } else {
            console.log(err, res);
          }
        });
      };

    }
  ]);
