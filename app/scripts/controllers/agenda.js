'use strict';

/**
 * @ngdoc function
 * @name gmicjkApp.controller:AgendaCtrl
 * @description
 * # ScheduleCtrl
 * Controller of the gmicjkApp
 */
angular.module('gmicjkApp')
  .controller('AgendaCtrl', ['$scope','$rootScope','$timeout','DreamFactory',function ($scope,$rootScope,$timeout,DreamFactory) {
    var req;

    if ($scope.title === 'Technical Stage Agenda') {
      req = {
        table_name: 'Jk15Sessions',
        related: 'Speakers_by_Jk15SessionSpeakers,Speakers_by_Jk15SessionModerators,Jk15Topics_by_TopicId',
        filter: 'Stage = \'all\' OR Stage = \'tech\''
      };
    }
    else {
      req = {
        table_name: 'Jk15Sessions',
        related: 'Speakers_by_Jk15SessionSpeakers,Speakers_by_Jk15SessionModerators,Jk15Topics_by_TopicId',
        filter: 'Stage = \'all\' OR Stage = \'main\''
      };
    }

    console.log($scope.title);
    $scope.loaded = false;
    $scope.agenda = [];

    $scope.$on('api:ready', function() {
      $rootScope.apiReady = true;
      $scope.$broadcast('getAgenda');
    });

    var getAgenda = function() {
      DreamFactory.api.db.getRecords(req,
        function(data) {
          $scope.loaded = true;
          $scope.agenda = data.record;
        },
        function(error) {
          console.log(error);
          $timeout(getAgenda, 2000);
        }
      );
    };

    $scope.$on('getAgenda', function() {
      getAgenda();
    });

    if (!$scope.loaded && $rootScope.apiReady) {
      getAgenda();
    }

    $scope.parseDate = function(mySqlDate) {
      var d = mySqlDate.split(/[- :]/);
      return new Date(d[0], d[1]-1, d[2], d[3] || 0, d[4] || 0, d[5] || 0);
    };
    $scope.orderByDate = function (item) {
      return $scope.parseDate(item.StartTime);
    };
    $scope.toggleDesc = function() {
      this.session.show = !this.session.show;
    };
  }]);
