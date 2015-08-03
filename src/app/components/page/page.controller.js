(function() {
  'use strict';

  angular
    .module('davisCru')
    .controller('PageController', ['global', 'fbWidgets', PageController]);

  /** @ngInject */
  function PageController(global, fbWidgets) {
    this.global = global;
    this.widgets = fbWidgets(global.getPageUrl());
    this.loadStatus = 'loading';

    this.widgets.$loaded(function() {
      if(this.widgets.length === 0){
        this.loadStatus = 'error';
      }else{
        this.loadStatus = 'success';
      }
    }.bind(this), function(error) {
      this.loadStatus = 'error';
      console.error("Error:", error);
    }.bind(this));
  }
})();
