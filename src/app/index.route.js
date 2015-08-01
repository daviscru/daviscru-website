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
        templateUrl: '/app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true).hashPrefix('!');
  }

})();
