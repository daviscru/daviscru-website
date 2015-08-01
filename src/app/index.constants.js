/* global  moment:false */
(function() {
  'use strict';

  angular
    .module('davisCru')
    .constant('moment', moment)
    .constant('firebaseUrl', 'https://daviscru.firebaseio.com/');

})();
