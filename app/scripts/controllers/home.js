angular.module('maktaba.controllers')
  .controller('HomeCtrl', ['$scope', function($scope) {
    $scope.header_image = 'images/me.gif';
    $('.parallax').parallax();
  }]);
