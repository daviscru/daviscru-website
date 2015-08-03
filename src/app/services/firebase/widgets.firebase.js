(function() {
  'use strict';

  angular
    .module('davisCru')
    .factory("fbWidgets", ["firebaseUrl", "$firebaseArray",
      function(firebaseUrl, $firebaseArray ) {
        return function(pageUrl){
          //remove trailing slash
          pageUrl = pageUrl.replace(/\/$/, ''); // Match a forward slash / at the end of the string ($)
          //replace slashes with /subPages/ to find deeper pages in subPages objects
          pageUrl = pageUrl.replace('/', '/subPages/');
          var ref = new Firebase(firebaseUrl + 'pages/' + pageUrl + '/widgets');
          return $firebaseArray(ref);
        };
      }
    ]);

})();
