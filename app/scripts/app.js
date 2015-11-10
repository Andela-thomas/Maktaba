(function() {
  'use strict';
  angular.module('maktaba.controllers', []);
  angular.module('maktaba.services', []);
  angular.module('maktaba.filters', []);
  angular.module('maktaba.directives', []);

  //Require Services
  require('./services/users');

  // Require Controllers
  require('./controllers/footer');
  require('./controllers/home');
  require('./controllers/about');
  require('./controllers/header');
  require('./controllers/login');

  window.app = angular.module('maktaba', [
    'maktaba.controllers',
    'maktaba.services',
    'maktaba.filters',
    'maktaba.directives',
    'ngRoute',
    'ui.router',
    'ngResource',
  ]);

  window.app.run(['$rootScope', '$location', 'Users',
    function($rootScope, $location, Users) {
      $(".button-collapse").sideNav();

      $rootScope.menu = [{
        name: 'Home',
        state: 'home'
      }, {
        name: 'About',
        state: 'about'
      }];
    }
  ]);

  window.app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/404');

    // Now set up the states
    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl',
        templateUrl: 'views/home.html'
      })
      .state('about', {
        url: '/about',
        controller: 'AboutCtrl',
        templateUrl: 'views/about.html'
      })
      .state('login', {
        url: '/login',
        controller: 'LoginCtrl',
        templateUrl: 'views/login.html'
      })
      .state('404', {
        url: '/404',
        templateUrl: 'views/404.html',
        controller: function($scope) {}
      });

    $locationProvider.html5Mode(true);
  }]);
})();
