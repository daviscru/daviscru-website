(function() {
  'use strict';

  angular
    .module('davisCru')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('pages', {
        url: '/{pageUrl:.*}',
        templateUrl: '/app/components/page/page.html',
        controller: 'PageController',
        controllerAs: 'page',
        resolve: {
          currentPageResolve: function(currentPage, $stateParams){
            return currentPage.update($stateParams.pageUrl || 'home');
          }
        }
      });
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true).hashPrefix('!');
  }

})();
