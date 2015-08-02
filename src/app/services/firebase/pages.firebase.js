(function() {
  'use strict';

  angular
    .module('davisCru')
    .factory("fbPages", ["firebaseUrl", "$firebaseObject",
      function(firebaseUrl, $firebaseObject ) {
        return function(pageUrl){
          var ref = new Firebase(firebaseUrl + 'pages/' + pageUrl.replace('/', '/subPages/'));
          return $firebaseObject(ref);
        }
      }
    ]);

})();
