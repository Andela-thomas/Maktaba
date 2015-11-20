angular.module('maktaba.controllers')
  .controller('HeaderCtrl', ['$rootScope', '$scope', '$state', '$window', 'Users', 'Auth',
    function($rootScope, $state, $scope, $window, Users, Auth) {
      // logout
      $scope.logout = function() {
        Auth.logout();
        console.log('logging out');
        $window.location('/');
      };

      $scope.goto = function() {
        $state.go('addDocument');
        console.log('I MA     NNNN');
      };



    }
  ]);
