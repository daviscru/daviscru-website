(function() {
  'use strict';

  angular
    .module('davisCru')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.debug("runBlock end");
  }

})();
