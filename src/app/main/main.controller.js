(function() {
  'use strict';

  angular
    .module('yoAngular')
    .controller('MainController', ['$stateParams', MainController]);

  /** @ngInject */
  function MainController($stateParams) {
    this.pageUrl = $stateParams.pageUrl || 'home';
  }
})();
