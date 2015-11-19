angular.module('maktaba.controllers')
  .controller('DocumentCtrl', ['$scope', '$state', '$stateParams', '$location', 'Users', 'Documents',
    function($scope, $state, $stateParams, $location, Users, Documents) {
      var id = $stateParams.id;
      // load the document

      Documents.get({
        id: id
      }, function(data) {
        $scope.document = data;
        var id = data.ownerId;
        console.log(id);
        Users.get({
          id: id
        }, function(user) {
          $scope.user = user;
          console.log(user);
        });

        console.log($scope.document);
      });


    }
  ]);
