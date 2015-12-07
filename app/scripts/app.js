(function() {
  'use strict';
  angular.module('maktaba.controllers', []);
  angular.module('maktaba.services', []);
  angular.module('maktaba.filters', []);
  angular.module('maktaba.directives', []);

  //Require Services
  require('./services/auth');
  require('./services/users');
  require('./services/document');

  // Require Controllers
  require('./controllers/footer');
  require('./controllers/home');
  require('./controllers/header');
  require('./controllers/login');
  require('./controllers/dashboard');
  require('./controllers/document');
  require('./controllers/profile');
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
      /*Preloader*/
      $(window).load(function() {
        setTimeout(function() {
          $('body').addClass('loaded');
        }, 200);
      });
      $(".button-collapse").sideNav({
        closeOnClick: true
      });
      // Get token
      $rootScope.$on("$locationChangeStart", function() {
        //Do your things
        Users.user(function(err, res) {
          if (res) {
            $rootScope.user = res;
            console.log(res);
          }
        });
      });
    }
  ]);

  window.app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

    // pass the token to the headers
    $httpProvider.interceptors.push('Interceptor');
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/404');

    // Now set up the states
    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl',
        templateUrl: 'views/home.html'
      })
      .state('dashboard', {
        url: '/dashboard',
        controller: 'DashboardCtrl',
        templateUrl: 'views/dashboard.html'
      })
      .state('document', {
        url: '/user/{id}/document',
        controller: 'DocumentCtrl',
        templateUrl: 'views/document.html'
      })
      .state('addDocument', {
        url: '/document/create',
        controller: 'DocumentCtrl',
        templateUrl: 'views/add-document.html'
      })
      .state('profile', {
        url: '/users/profile',
        controller: 'ProfileCtrl',
        templateUrl: 'views/profile.html'
      })
      .state('login', {
        url: '/login',
        controller: 'LoginCtrl',
        templateUrl: 'views/login.html'
      })
      .state('404', {
        url: '/404',
        templateUrl: 'views/404.html'
      });

    $locationProvider.html5Mode(true);
  }]);
})();
