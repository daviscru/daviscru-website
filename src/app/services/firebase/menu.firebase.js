(function() {
  'use strict';

  angular
    .module('davisCru')
    .factory("fbMenu", ["firebaseUrl", "$firebaseArray",
      function(firebaseUrl, $firebaseArray) {
        var ref = new Firebase(firebaseUrl + 'menu');

        return $firebaseArray(ref);
      }
    ]);

})();
