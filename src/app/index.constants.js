/* global  moment:false */
(function() {
  'use strict';

  angular
    .module('yoAngular')
    .constant('moment', moment)
    .constant('firebaseUrl', 'https://daviscru.firebaseio.com/');

})();
