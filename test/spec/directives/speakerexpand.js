'use strict';

describe('Directive: speakerExpand', function () {

  // load the directive's module
  beforeEach(module('gmicjkApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<speaker-expand></div>');
    element = $compile(element)(scope);
    // TODO: implement template cache so test works with templateUrl
    // expect(element.text()).toBe('this is the speakerExpand directive');
  }));
});
