'use strict';

/**
 * @ngdoc directive
 * @name gmicjkApp.directive:speakerExpand
 * @description
 * # speakerExpand
 */
angular.module('gmicjkApp')
  .directive('speakerExpand', function ($document) {
    return {
      restrict: 'E',
      templateUrl: 'views/speakerdialog.html',
      link: function postLink(scope, element, attrs) {
        var opened = false;
        scope.$watch('currentSpeaker', function(newVal, oldVal) {
          if (newVal !== -1) {
            opened = true;
            angular.element('.fs-dialog').removeClass('fs-dialog-open fs-dialog-close'); // ensure classes are removed

            scope.FirstName = newVal.FirstName;
            scope.LastName = newVal.LastName;
            scope.Bio = newVal.Bio;
            scope.JobTitle = newVal.JobTitle;
            scope.Company = newVal.Company;
            scope.Twitter = newVal.Twitter;

            var closeDialog = function() {
              angular.element('.fs-dialog').removeClass('fs-dialog-open').addClass('fs-dialog-close').delay(250).queue(function() {
                angular.element(this).removeClass('fs-dialog-close');
              });
              scope.currentSpeaker = -1;
              opened = false;
              scope.$apply();
            };

            angular.element('.fs-dialog').addClass('fs-dialog-open');
            angular.element('.fs-dialog-overlay,[data-dialog-close]').on('click', closeDialog);
            $document.on('keydown', function(ev) {
              var key = ev.keyCode || ev.which;
              if (key === 27 && opened) {
                closeDialog();
              }
            });
          }
        });
      }
    };
  });
