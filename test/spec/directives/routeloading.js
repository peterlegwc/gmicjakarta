'use strict';

describe('Directive: routeLoading', function () {

  // load the directive's module
  beforeEach(module('gmicjkApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should replace the route-loading tag with a div', inject(function ($compile) {
    element = angular.element('<route-loading></route-loading>');
    element = $compile(element)(scope);
    expect(element.hasClass('spinner-container')).toBe(true);
    expect(element.scope().isRouteLoading).toBe(false);
  }));
});
