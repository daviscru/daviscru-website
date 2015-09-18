(function() {
  'use strict';

  angular
    .module('davisCru')
    .factory("fbWidgets", fbWidgetsService);

  /** @ngInject */
  function fbWidgetsService($filter, envService, $firebaseArray ) {
    return function(pageUrl){

      var ref = new Firebase(envService.read('firebaseUrl') + 'pages/' + $filter('firebasePageUrl')(pageUrl) + '/widgets');
      return $firebaseArray(ref);
    };
  }

})();
