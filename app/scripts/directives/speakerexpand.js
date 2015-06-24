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
            var speaker;
            scope.speakers.forEach(function(el) {
              if (el.speakerId === newVal) {
                speaker = el;
              }
            });
            scope.firstName = speaker.firstName;
            scope.lastName = speaker.lastName;
            scope.bio = speaker.bio;
            scope.jobTitle = speaker.jobTitle;
            scope.company = speaker.company;
            scope.twitter = speaker.twitter;

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
