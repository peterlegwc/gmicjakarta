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
    'times.tabletop'
  ])
  .config(function ($routeProvider, $locationProvider, TabletopProvider) {
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
        title: '2015 Main Stage Agenda',
        templateUrl: 'views/agenda.html',
        controller: 'AgendaCtrl'
      })
      .when('/tech-agenda', {
        title: '2015 Technical Stage Agenda',
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
    // Google Sheet: https://docs.google.com/spreadsheets/d/1x06q6o9UzFw9Fr5nsPKF1OK0dp_fhRo8MsBVkAA_Amo/edit#gid=1102852713
    TabletopProvider.setTabletopOptions({
      key: 'https://docs.google.com/spreadsheets/d/1x06q6o9UzFw9Fr5nsPKF1OK0dp_fhRo8MsBVkAA_Amo/pubhtml'
    });
  }).run(['$rootScope', '$location', '$window', function($rootScope, $location, $window) {
    $rootScope.title = 'GMIC Jakarta';
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
      // $window.ga('send', 'pageview', { page: $location.url() });
      if (current.hasOwnProperty('$$route')) {
        $rootScope.title = current.$$route.title;
      }
    });
  }]);
