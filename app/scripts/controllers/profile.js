angular.module('maktaba.controllers')
  .controller('ProfileCtrl', ['$scope', '$rootScope', '$state', 'Users', function($scope, $rootScope, $state, Users) {
    // Get user specific documents
    if ($rootScope.user._id) {
      Users.getDocument($rootScope.user._id, function(err, res) {
        $scope.documents = res;
        $scope.count = res.length;
      });
    }

    // get all available users
    $scope.users = Users.query();
    // load all the documents of a specified user
    if ($rootScope.user._id) {
      Users.getDocument($rootScope.user._id, function(err, res) {
        $scope.documents = res;
      });
    }

    $scope.edit = false;

    $scope.editProfile = function() {
      $scope.edit = true;
    };



    $scope.updateUser = function() {
      console.log($scope.user);
      Users.update({
        id: $rootScope.user._id
      }, $scope.user, function(res) {
        if (res.message) {
          Materialize.toast(res.message, 5000);
          $state.go('dashboard');
        } else {
          Materialize.toast(res.error, 5000);
        }
      });
    };
  }]);
