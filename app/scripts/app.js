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
    'ngSanitize',
    'ngDreamFactory'
  ])
  .constant('DSP_URL', 'https://dsp-gmic.cloud.dreamfactory.com')
  .constant('DSP_API_KEY', 'gmicjk15')
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
      .when('/agenda', {
        title: 'Agenda',
        templateUrl: 'views/agenda.html',
        controller: 'AgendaCtrl'
      })
      .when('/speakers', {
        title: 'Speakers',
        templateUrl: 'views/speakers.html',
        controller: 'SpeakersCtrl'
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
