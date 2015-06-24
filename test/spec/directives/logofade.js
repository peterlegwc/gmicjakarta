'use strict';

describe('Directive: logoFade', function () {

  // load the directive's module
  beforeEach(module('gmicjkApp'));

  var MainCtrl, element,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should make brand logo invisible', inject(function ($compile) {
    element = angular.element('<img logo-fade page="title">');
    scope.title = 'Test One';
    element = $compile(element)(scope);
    expect(element.isolateScope().page).toBe('Test One');
    scope.title = 'Test Two';
    element = $compile(element)(scope);
    expect(element.isolateScope().page).toBe('Test Two');
  }));
});
