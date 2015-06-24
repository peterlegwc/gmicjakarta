'use strict';

/**
 * @ngdoc overview
 * @name gmicjkApp
 * @description
 * # gmicjkApp
 *
 * Main module of the application.
 */
angular
  .module('gmicjkApp', [
    'ngRoute',
    'ngResource',
    'leaflet-directive',
    'ngAnimate',
    'ngSanitize'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        title: 'Home',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/passes-prices', {
        title: 'Passes and Prices',
        templateUrl: 'views/passes-prices.html'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  }).run(['$rootScope', '$location', '$window', function($rootScope, $location, $window) {
    $rootScope.title = 'GMIC Jakarta';
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
      // $window.ga('send', 'pageview', { page: $location.url() });
      if (current.hasOwnProperty('$$route')) {
        $rootScope.title = current.$$route.title;
      }
    });
  }]);
