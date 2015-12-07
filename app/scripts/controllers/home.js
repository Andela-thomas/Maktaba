angular.module('maktaba.controllers')
  .controller('HomeCtrl', ['$scope', function($scope) {
    $scope.init = function() {
      $('.parallax').parallax();
    };
    $scope.init();

  }]);
