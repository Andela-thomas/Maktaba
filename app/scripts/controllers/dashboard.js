angular.module('maktaba.controllers')
  .controller('DashboardCtrl', ['$scope', '$state', '$stateParams', '$location', 'Users',
    function($scope, $state, $stateParams, $location, Users) {
      $(function() {
        $('.tooltipped').tooltip({
          delay: 50
        });
      });

      var userId = $location.search().id,
        documentId = $stateParams.id;

      //Get all users
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
