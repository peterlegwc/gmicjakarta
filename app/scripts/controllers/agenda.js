'use strict';

/**
 * @ngdoc function
 * @name gmicjkApp.controller:AgendaCtrl
 * @description
 * # ScheduleCtrl
 * Controller of the gmicjkApp
 */
angular.module('gmicjkApp')
  .controller('AgendaCtrl', ['$scope','$rootScope','$timeout','Tabletop',function ($scope,$rootScope,$timeout,Tabletop) {
    var speakersToArray = function() {
      if ($scope.agenda.length > 0) {
        $scope.agenda.forEach(function(item) {
          if (!Array.isArray(item.Speakers) && item.Speakers) {
            item.Speakers = item.Speakers.split('\n');
          }
        });
      }
    };
    
    $scope.loaded = false;
    $scope.agenda = [];

    if ($scope.title === '2015 Technical Stage Agenda') {
      Tabletop.then(function(tdata) {
        $scope.agenda = tdata[0]['Tech Stage'].all();
        speakersToArray();
        $scope.loaded = true;
      }, function(reason) {
        console.log('Failed: ' + reason);
      });
    }
    else {
      Tabletop.then(function(tdata) {
        $scope.agenda = tdata[0]['Main Stage'].all();
        speakersToArray();
        $scope.loaded = true;
      }, function(reason) {
        console.log('Failed: ' + reason);
      });
    }

    $scope.parseDate = function(mySqlDate) {
      if (mySqlDate) {
        var d = mySqlDate.split(/[-/ :]/);
        return new Date(d[0], d[1]-1, d[2], d[3] || 0, d[4] || 0, d[5] || 0);
      }
    };
    $scope.orderByDate = function (item) {
      return $scope.parseDate(item.StartTime);
    };
    $scope.toggleDesc = function() {
      this.session.show = !this.session.show;
    };
    
  }]);
