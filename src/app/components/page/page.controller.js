(function() {
  'use strict';

  angular
    .module('yoAngular')
    .controller('PageController', ['global', PageController]);

  /** @ngInject */
  function PageController(global) {
    this.global = global;
  }
})();
