'use strict';

/**
 * @ngdoc directive
 * @name gmicjkApp.directive:routeLoading
 * @description
 * # routeLoading
 */
angular.module('gmicjkApp')
  .directive('routeLoading', function ($rootScope) {
    return {
      restrict: 'E',
      template: '<div class="spinner-container ng-fadeInOut" ng-show="isRouteLoading">'+
        '<div class="spinner">'+
          '<div class="rect1"></div>'+
          '<div class="rect2"></div>'+
          '<div class="rect3"></div>'+
          '<div class="rect4"></div>'+
          '<div class="rect5"></div>'+
        '</div>'+
      '</div>',
      replace: true,
      link: function postLink(scope, element, attrs) {
        scope.isRouteLoading = false;

        $rootScope.$on('$routeChangeStart', function() {
          scope.isRouteLoading = true;
        });

        $rootScope.$on('$routeChangeSuccess', function() {
          scope.isRouteLoading = false;
        });
      }
    };
  });
