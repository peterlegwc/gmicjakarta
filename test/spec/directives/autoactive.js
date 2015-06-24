'use strict';

describe('Directive: autoActive', function () {

  // load the directive's module
  beforeEach(module('gmicjkApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('makes the active page highlighted in the menu', inject(function ($compile, $location) {
    element = angular.element(
      '<ul auto-active>' +
        '<li><a href="#/1">One</a></li>' +
        '<li><a href="#/2">Two</a></li>' +
      '</ul>');
    $location.path('/1');

    element = $compile(element)(scope);
    var test1 = angular.element(element.children()[0]);
    var test2 = angular.element(element.children()[1]);

    expect(test1.hasClass('active')).toBe(true);
    expect(test2.hasClass('active')).toBe(false);
  }));
});
