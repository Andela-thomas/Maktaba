angular.module('maktaba.controllers')
  .controller('HeaderCtrl', ['$rootScope', '$scope', '$window', 'Users', 'Auth',
    function($rootScope, $scope, $window, Users, Auth) {
      // logout
      $scope.logout = function() {
        Auth.logout();
        console.log('logging out');
        $window.location = '/';
      };
    }
  ]);
