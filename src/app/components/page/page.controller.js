(function() {
  'use strict';

  angular
    .module('yoAngular')
    .controller('PageController', ['global', 'fbPages', PageController]);

  /** @ngInject */
  function PageController(global, fbPages) {
    this.global = global;
    this.page = fbPages(global.getPageUrl());
    this.page.$loaded(function() {
      console.log('loaded pages');
    });
  }
})();