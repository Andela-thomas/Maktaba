angular.module('maktaba.controllers')
  .controller('HeaderCtrl', ['$scope', '$rootScope', '$state', 'Auth',
    function($scope, $rootScope, $state, Auth) {
      // logout
      $scope.logout = function() {
        delete $rootScope.user;
        Auth.logout();
        $state.go('home');
      };

      $scope.goto = function() {
        $state.go('addDocument');
      };
    }
  ]);
