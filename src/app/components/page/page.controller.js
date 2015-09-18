(function() {
  'use strict';

  angular
    .module('davisCru')
    .controller('PageController', PageController);

  /** @ngInject */
  function PageController($scope, currentPage, fbWidgets, authentication) {
    var vm = this;
    vm.auth = authentication;
    vm.loadStatus = 'loading';
    var fbWidgets = fbWidgets(currentPage.url);
    fbWidgets.$bindTo($scope, 'widgets').then(function(){
      if($scope.widgets[0] === undefined){
        vm.loadStatus = 'error';
      }else{
        vm.loadStatus = 'success';
      }
    });
  }
})();
