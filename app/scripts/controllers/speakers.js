'use strict';

/**
 * @ngdoc function
 * @name gmicjkApp.controller:SpeakersCtrl
 * @description
 * # SpeakersCtrl
 * Controller of the gmicjkApp
 */
angular.module('gmicjkApp')
  .controller('SpeakersCtrl', ['$scope','$rootScope','$timeout','DreamFactory', function ($scope,$rootScope,$timeout,DreamFactory) {
    var req = {
      table_name: 'Jk15Sessions',
      related: 'Speakers_by_Jk15SessionSpeakers,Speakers_by_Jk15SessionModerators'
    };

    $scope.loaded = false;
    $scope.speakers = [];
    var tempData = [];
    var uniqueSpeakers = [];

    $scope.$on('api:ready', function() {
      $rootScope.apiReady = true;
      $scope.$broadcast('getSpeakers');
    });

    var getSpeakers = function() {
      DreamFactory.api.db.getRecords(req,
        function(data) {
          $scope.loaded = true;
          tempData = data.record;
          tempData.forEach(function(element,index,array) {
            uniqueSpeakers = uniqueSpeakers.concat(element.Speakers_by_Jk15SessionSpeakers);
            uniqueSpeakers = uniqueSpeakers.concat(element.Speakers_by_Jk15SessionModerators);
          });
          uniqueSpeakers.forEach(function(element,index,array) {
            if (arrayObjectIndexOf($scope.speakers, element.SpeakerId, 'SpeakerId') >= 0) {
              uniqueSpeakers.splice(index,1);
            }
            else {
              $scope.speakers.push(element);
            }
          });
        },
        function(error) {
          console.log(error);
          $timeout(getSpeakers, 2000);
        }
      );
    };

    $scope.$on('getSpeakers', function() {
      getSpeakers();
    });

    if (!$scope.loaded && $rootScope.apiReady) {
      getSpeakers();
    }

    $scope.currentSpeaker = -1;
    $scope.setDialog = function() {
      $scope.currentSpeaker = this.speaker.SpeakerId;
    };
    $scope.convertName = function(name) {
      if (name) {
        return name.replace(/\s+/g, '-').toLowerCase();
      }
    };
    function arrayObjectIndexOf(myArray, searchTerm, property) {
      for(var i = 0, len = myArray.length; i < len; i++) {
        if (myArray[i][property] === searchTerm) {
          return i;
        }
      }
      return -1;
    }

  }]);
