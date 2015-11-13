angular.module('maktaba.controllers')
  .controller('FooterCtrl', ['$scope', function($scope) {
    $scope.footer = {
      appName: 'Maktaba',
      description: 'This is one bad ass document management system'
    };
  }]);
