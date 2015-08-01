(function() {
  'use strict';

  angular
    .module('yoAngular')
    .factory('global', function (){
      var factory = {};

      var pageUrl;

      factory.setPageUrl = function(url){
        pageUrl = url;
      };

      factory.getPageUrl = function(){
        return pageUrl;
      };

      factory.getPageName = function(){
        return 'unimplemented';
      };

      return factory;
    });
})();
