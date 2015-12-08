angular.module('maktaba.controllers')
  .controller('HeaderCtrl', ['$scope', '$state', 'Auth',
    function($scope, $state, Auth) {
      // logout
      $scope.logout = function() {
        Auth.logout();
        $state.go('home');
      };

      $scope.goto = function() {
        $state.go('addDocument');
      };
    }
  ]);
