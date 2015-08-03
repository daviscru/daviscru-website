(function() {
  'use strict';

  angular
    .module('davisCru')
    .filter('floor', function() {
      return function(input) {
        return Math.floor(input);
      };
    });
})();
