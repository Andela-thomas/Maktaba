angular.module('maktaba.services')
  .factory('Documents', ['$resource', function($resource) {
    return $resource('/api/documents/:id', {
      id: '@id'
    }, {
      update: {
        // this method issues a PUT request
        method: 'PUT'
      }
    }, {
      stripTrailingSlashes: false
    });
  }]);
