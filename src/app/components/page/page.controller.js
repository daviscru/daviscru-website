(function() {
  'use strict';

  angular
    .module('davisCru')
    .controller('PageController', PageController);

  /** @ngInject */
  function PageController($log, currentPage, fbWidgets, authentication) {
    var vm = this;
    vm.widgets = fbWidgets(currentPage.url);
    vm.auth = authentication;
    vm.loadStatus = 'loading';

    vm.widgets.$loaded(function() {
      if(vm.widgets.length === 0){
        vm.loadStatus = 'error';
      }else{
        vm.loadStatus = 'success';
      }
    }, function(error) {
      vm.loadStatus = 'error';
      $log.error("Error loading page widgets:", error);
    });
  }
})();
