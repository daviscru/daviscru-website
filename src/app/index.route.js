(function() {
  'use strict';

  angular
    .module('yoAngular')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('pages', {
        url: '/{pageUrl:.*}',
        templateUrl: '/app/components/page/page.html',
        controller: 'PageController',
        controllerAs: 'page',
        onEnter: function(global, $stateParams){
          global.setPageUrl($stateParams.pageUrl || 'home');
        }
      });
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true).hashPrefix('!');
  }

})();
