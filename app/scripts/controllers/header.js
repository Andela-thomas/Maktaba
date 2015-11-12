angular.module('maktaba.controllers')
  .controller('HeaderCtrl', ['$rootScope', '$scope', '$state', 'Users', 'Auth',
    function($rootScope, $scope, $state, Users, Auth) {
      // logout
      $scope.logout = function() {
        Auth.logout();
        console.log('logging out');
        $state.go('home');
      };
    }
  ]);
