angular.module('maktaba.controllers')
  .controller('ProfileCtrl', ['$scope', '$rootScope', '$state', 'Users', function($scope, $rootScope, $state, Users) {
    // Get user specific documents
    var id;
    $scope.get = function(id) {
      Users.getDocument(id, function(err, res) {
        $scope.documents = res;
      });
    };

    // get all available users
    $scope.users = Users.query();
    // load all the documents of a specified user
    if ($rootScope.user) {
      id = $rootScope.user._id;
      $scope.get(id);
    }

    $scope.edit = false;

    $scope.editProfile = function() {
      $scope.edit = true;
    };

    $scope.updateUser = function() {
      Users.update({
          id: id
        }, $scope.user,
        /* istanbul ignore next */
        function(res) {
          if (res.message) {
            Materialize.toast(res.message, 5000);
            $state.go('dashboard');
          } else {
            Materialize.toast(res.error, 5000);
          }
        },
        /* istanbul ignore next */
        function(err) {
          if (err) {
            Materialize.toast('Update, failed');
          }
        });
    };
  }]);
