angular.module('maktaba.controllers')
  .controller('DashboardCtrl', ['$scope', '$state', '$rootScope', '$location', 'Users',
    function($scope, $state, $rootScope, $location, Users) {

      $scope.init = function() {
        $('.tooltipped').tooltip({
          delay: 50
        });

        $scope.users = Users.query();
        // load all the documents of a specified user
        /* istanbul ignore if */
        if ($rootScope.user) {
          $scope.getDocuments($rootScope.user._id);
        }
      };

      $scope.getDocuments = function(id) {
        Users.getDocument(id, /* istanbul ignore next */ function(err, res) {
          $scope.documents = res;
        });
      };

      $scope.view = function(id) {
        $scope.getDocuments(id);
      };

      // Read more
      $scope.readMore = function(id) {
        $state.go('document', {
          id: id
        });
      };

      $scope.init();
    }
  ]);
