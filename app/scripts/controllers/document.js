angular.module('maktaba.controllers')
  .controller('DocumentCtrl', ['$scope', '$state', '$stateParams', '$location', 'Users', 'Documents',
    function($scope, $state, $stateParams, $location, Users, Documents) {
      var id = $stateParams.id;
      $('select').material_select();
      // load the document
      Documents.get({
        id: id
      }, /* istanbul ignore next */ function(data) {
        $scope.document = data;
        Users.get({
          id: $scope.document.ownerId
        }, /* istanbul ignore function */ function(user) {
          $scope.user = user;
        });
      });

      //  Update document
      $scope.update = function() {
        Documents.update({
          id: $scope.document._id
        }, $scope.document, /* istanbul ignore next */ function(res) {
          if (res.message) {
            Materialize.toast(res.message, 5000);
            $state.go('dashboard');
          } else {
            Materialize.toast(res.error, 5000);
          }
        });
      };

      // Delete document

      $scope.delete = function() {
        Documents.remove({
          id: $scope.document._id
        }, /* istanbul ignore next */ function(res) {
          if (res.ok) {
            Materialize.toast('Delete successful', 5000);
            $state.go('dashboard');
          } else {
            Materialize.toast('Delete failed', 5000);
          }
        });
      };

      $scope.addDocument = function() {
        Documents.save($scope.document, /* istanbul ignore next */ function(res) {
          if (res.dateCreated) {
            Materialize.toast('You document has been created succesfully', 5000);
          }
        });
      };
    }
  ]);
