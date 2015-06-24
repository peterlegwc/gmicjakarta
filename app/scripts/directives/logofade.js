'use strict';

/**
 * @ngdoc directive
 * @name gmicjkApp.directive:logoFade
 * @description
 * # logoFade
 */
angular.module('gmicjkApp')
  .directive('logoFade', ['$window', function ($window) {
    return {
      restrict: 'A',
      scope: {
        page: '='
      },
      link: function (scope, element) {
        var w = angular.element($window);
        // handle large logo and navbar logo
        function logoHandler() {
          if ($window.pageYOffset >= 100) {
            element.removeClass('translucent');
          }
          else {
            element.addClass('translucent');
          }
          scope.$apply();
        }
        scope.$watch('page', function(page){
          if(page === 'Home'){
            element.addClass('translucent');
            w.on('scroll',logoHandler);
            w.on('touchmove',logoHandler);
          }
          else {
            element.removeClass('translucent');
            w.off('scroll', logoHandler);
            w.off('touchmove',logoHandler);
          }
        });
      }
    };
  }]);
