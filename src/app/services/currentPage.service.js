(function() {
  'use strict';

  angular
    .module('davisCru')
    .factory('currentPage', currentPageService);

  /** @ngInject */
  function currentPageService($window, $filter, envService, $firebaseObject){
    var factory = {};

    factory.url = 'home';
    factory.title = 'Home';

    factory.update = function(url){
      factory.url = url;
      var ref = new Firebase(envService.read('firebaseUrl') + 'pages/' + $filter('firebasePageUrl')(factory.url) + '/title');
      var fbTitle = $firebaseObject(ref);
      return fbTitle.$loaded().then(function(obj){
        factory.title = obj.$value ? obj.$value : 'Error';
        $window.document.title = 'Cru at UC Davis | ' + factory.title;
        return factory;
      });
    };

    factory.getBaseUrl = function(){
      return factory.url.split('/')[0];
    };

    return factory;
  }

})();
