(function() {
  'use strict';

  angular
    .module('davisCru')
    .controller('PageController', ['currentPage', 'fbWidgets', 'authentication', PageController]);

  /** @ngInject */
  function PageController(currentPage, fbWidgets, authentication) {
    this.widgets = fbWidgets(currentPage.url);
    this.auth = authentication;
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
