(function() {
  'use strict';

  describe('controllers', function(){

    beforeEach(module('yoAngular'));

    it('should load the current page url', inject(function($controller) {
      var vm = $controller('PageController');

      /*expect(angular.isArray(vm.awesomeThings)).toBeTruthy();
      expect(vm.awesomeThings.length > 5).toBeTruthy();*/
    }));
  });
})();
