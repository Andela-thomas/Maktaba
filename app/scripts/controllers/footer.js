angular.module('maktaba.controllers')
  .controller('FooterCtrl', ['$scope', function($scope) {
    $scope.footer = {
      appName: 'Maktaba',
      description: 'Just think and let us worry about the rest'
    };
  }]);
