(function() {
  'use strict';

  angular
    .module('davisCru')
    .factory("fbMenu", fbMenuService);

  /** @ngInject */
  function fbMenuService(envService, $firebaseArray) {
    var ref = new Firebase(envService.read('firebaseUrl') + 'menu');

    return $firebaseArray(ref);
  }

})();
