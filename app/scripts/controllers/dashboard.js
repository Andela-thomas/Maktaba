angular.module('maktaba.controllers')
  .controller('DashboardCtrl', ['$scope', '$state', '$rootScope', '$location', 'Users',
    function($scope, $state, $rootScope, $location, Users) {
      $('.tooltipped').tooltip({
        delay: 50
      });

      $scope.users = Users.query();
      // load all the documents of a specified user


      $scope.getDocuments = function(id) {
        Users.getDocument(id, function(err, res) {
          $scope.documents = res;
        });
      };

      if ($rootScope.user) {
        $scope.getDocuments($rootScope.user._id);
      }

      $scope.view = function(id) {
        $scope.getDocuments(id);
      };


      // Read more
      $scope.readMore = function(id) {
        $state.go('document', {
          id: id
        });
      };
    }
  ]);
