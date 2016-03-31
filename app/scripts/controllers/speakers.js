'use strict';

/**
 * @ngdoc function
 * @name gmicjkApp.controller:SpeakersCtrl
 * @description
 * # SpeakersCtrl
 * Controller of the gmicjkApp
 */
angular.module('gmicjkApp')
  .controller('SpeakersCtrl', ['$scope','$rootScope','$timeout','Tabletop', function ($scope,$rootScope,$timeout,Tabletop) {

    $scope.loaded = false;
    $scope.speakers = [];

    Tabletop.then(function(tdata) {
      $scope.speakers = tdata[0].Speakers.all();
      $scope.speakers.sort(function(a,b) {
        return a.LastName.localeCompare(b.LastName);
      });
      // console.log($scope.speakers);
      $scope.loaded = true;
    }, function(reason) {
      console.log('Failed: ' + reason);
    });

    $scope.currentSpeaker = -1;
    $scope.setDialog = function() {
      $scope.currentSpeaker = $scope.speakers[this.$index];
    };
    $scope.convertName = function(name) {
      if (name) {
        return name.replace(/\s+/g, '-').toLowerCase();
      }
    };
  }]);
