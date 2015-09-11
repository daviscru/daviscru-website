(function() {
  'use strict';

  angular
    .module('davisCru')
    .factory("fbWidgets", ["$filter", "firebaseUrl", "$firebaseArray",
      function($filter, firebaseUrl, $firebaseArray ) {
        return function(pageUrl){

          var ref = new Firebase(firebaseUrl + 'pages/' + $filter('firebasePageUrl')(pageUrl) + '/widgets');
          return $firebaseArray(ref);
        };
      }
    ]);

})();
