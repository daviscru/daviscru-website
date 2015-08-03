(function() {
  'use strict';

  angular
    .module('davisCru')
    .controller('PageController', ['global', 'fbPages', PageController]);

  /** @ngInject */
  function PageController(global, fbPages) {
    this.global = global;
    var page = fbPages(global.getPageUrl());
    this.loadStatus = 'loading';

    page.$loaded(function() {
      if(page.$value === null){
        this.loadStatus = 'error';
      }else{
        this.widgets = page.widgets;
        this.loadStatus = 'success';
      }
    }.bind(this), function(error) {
      this.loadStatus = 'error';
      console.error("Error:", error);
    }.bind(this));
  }
})();
