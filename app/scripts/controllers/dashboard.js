angular.module('maktaba.controllers')
  .controller('DashboardCtrl', ['$scope', '$state', '$rootScope', '$location', 'Users',
    function($scope, $state, $rootScope, $location, Users) {
      $(function() {
        $('.tooltipped').tooltip({
          delay: 50
        });
      });
      var userId = $rootScope.user._id;
      console.log($rootScope.user);
      $scope.users = Users.query();
      // load all the documents of a specified user
      if (userId) {
        Users.getDocument(userId, function(err, res) {
          $scope.documents = res;
        });
      }

      // Read more
      $scope.readMore = function(id) {
        $state.go('document', {
          id: id
        });
      };
    }
  ]);
