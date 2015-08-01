(function() {
  'use strict';

  angular
    .module('yoAngular')
    .factory("fbMenu", ["firebaseUrl", "$firebaseArray",
      function(firebaseUrl, $firebaseArray) {
        var ref = new Firebase(firebaseUrl + 'menu');

        return $firebaseArray(ref);
      }
    ]);

})();
