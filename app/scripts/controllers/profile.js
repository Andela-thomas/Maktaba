angular.module('maktaba.controllers')
  .controller('ProfileCtrl', ['$scope', function($scope) {
    $scope.header_image = 'images/me.gif';
    $('.parallax').parallax();
  }]);
