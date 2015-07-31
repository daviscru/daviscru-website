(function() {
  'use strict';

  angular
    .module('yoAngular')
    .factory("menuRef", ["firebaseUrl", "$firebaseArray",
      function(firebaseUrl, $firebaseArray) {
        var ref = new Firebase(firebaseUrl + 'menu');

        return $firebaseArray(ref);
      }
    ]);

})();
