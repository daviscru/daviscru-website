(function() {
  'use strict';

  angular
    .module('davisCru')
    .factory("fbMenu", ["envService", "$firebaseArray",
      function(envService, $firebaseArray) {
        var ref = new Firebase(envService.read('firebaseUrl') + 'menu');

        return $firebaseArray(ref);
      }
    ]);

})();
