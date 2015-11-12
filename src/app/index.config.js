(function() {
  'use strict';

  angular
    .module('davisCru')
    .config(config);

  /** @ngInject */
  function config($logProvider, envServiceProvider) {
    envServiceProvider.config({
      domains: {
        development: ['localhost', 'staging.daviscru.com', 'staging.daviscru.divshot.io', 'daviscru-staging.firebaseapp.com'],
        production: ['daviscru.com', 'www.daviscru.com', 'production.daviscru.divshot.io', 'daviscru.firebaseapp.com']
      },
      vars: {
        development: {
          firebaseUrl: 'https://daviscru-staging.firebaseio.com/'
        },
        production: {
          firebaseUrl: 'https://daviscru.firebaseio.com/'
        }
      }
    });

    // run the environment check, so the comprobation is made
    // before controllers and services are built
    envServiceProvider.check();

    if (envServiceProvider.is('production')) {
      /// Disable log
      $logProvider.debugEnabled(false);
    } else {
      // Enable log
      $logProvider.debugEnabled(true);
    }
  }
})();
