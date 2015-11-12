angular.module('maktaba.controllers')
  .controller('HomeCtrl', ['$scope', function($scope) {
    $scope.header_image = 'images/me.gif';
    $('.slider').slider({
      full_width: false,
      interval: 5000,
      transition: 800,
      height: 500
    });
  }]);
