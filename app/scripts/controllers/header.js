angular.module('maktaba.controllers')
  .controller('HeaderCtrl', ['$scope', '$state', '$window', 'Auth',
    function($scope, $state, $window, Auth) {
      // logout
      $scope.logout = function() {
        Auth.logout();
        console.log('logging out');
        $window.location = '/';
      };

      $scope.goto = function() {
        $state.go('addDocument');
      };
    }
  ]);
