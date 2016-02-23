'use strict';

/**
 * @ngdoc function
 * @name gmicjkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gmicjk
 */
angular.module('gmicjkApp')
  .controller('MainCtrl', ['$scope', 'leafletData', function ($scope, leafletData) {
    angular.extend($scope, {
        center: {
          lat: -6.202895,
          lng: 106.818632,
          zoom: 14
        },
        defaults: {
          tileLayer: 'https://{s}.tiles.mapbox.com/v4/peterlegwc.l80heo1e/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicGV0ZXJsZWd3YyIsImEiOiIxZjJCajJBIn0.BaUQLHLoFat12596nD3PLA',
          scrollWheelZoom: false,
        },
        markers: {
          gmicjkMarker: {
            lat: -6.202895,
            lng: 106.818632,
            message: '<strong class="heading">Shangri-La Hotel</strong><br>Kota BNI JL. Jend. Sudirman Kav. 1<br>Jakarta, 10220, Indonesia',
            focus: true,
            draggable: false
          }
        }
    });

    // data for gmic locations.
    // TODO: Move locations to a separate file so it can be called elsewhere
    $scope.gmics = [
      {
        name: 'GMIC Beijing',
        city: 'Beijing',
        date: 'April 28-30, 2015',
        img: 'images/gmics/gmic-beijing.png',
        url: '//beijing.thegmic.com'
      },
      {
        name: 'GMIC New York',
        city: 'New York',
        date: 'June 11, 2015',
        img: 'images/gmics/gmic-nyc.png',
        url: '//nyc.thegmic.com'
      },
      {
        name: 'GMIC Tokyo',
        city: 'Tokyo',
        date: 'July 10, 2015',
        img: 'images/gmics/gmic-tokyo.png',
        url: '//tokyo.thegmic.com'
      },
      {
        name: 'GMIC Jakarta',
        city: 'Jakarta',
        date: 'August 11, 2015',
        img: 'images/gmics/gmic-jakarta.png',
        url: ''
      },
      {
        name: 'GMIC Bangalore',
        city: 'Bangalore',
        date: 'September 9-10, 2015',
        img: 'images/gmics/gmic-bangalore.png',
        url: '//bangalore.thegmic.com'
      },
      {
        name: 'GMIC Silicon Valley',
        city: 'Silicon Valley',
        date: 'September 28-30, 2015',
        img: 'images/gmics/gmic-sv.png',
        url: '//sv.thegmic.com'
      },
      {
        name: 'GMIC São Paulo',
        city: 'São Paulo',
        date: 'November 17, 2015',
        img: 'images/gmics/gmic-saopaulo.png',
        url: '//saopaulo.thegmic.com'
      },
      {
        name: 'GMIC Taipei',
        city: 'Taipei',
        date: 'December 15-16, 2015',
        img: 'images/gmics/gmic-taipei.png',
        url: '//taipei.thegmic.com/'
      },
    ];

    // TODO: Move leaflet conditional logic into a directive
    // offsets map on larger screens to show more of new york
    if (angular.element(window).width() < 768) {
      leafletData.getMap('map').then(function(map) {
        // Disable drag and zoom handlers.
        map.dragging.disable();
        map.touchZoom.disable();

        // Disable tap handler, if present.
        if (map.tap) {
          map.tap.disable();
        }
      });
    }
  }]);
