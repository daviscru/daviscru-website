(function() {
  'use strict';

  angular
    .module('davisCru')
    .directive('mainMenu', menu);

  /** @ngInject */
  function menu() {
    var directive = {
      restrict: 'E',
      templateUrl: '/app/components/menu/menu.html',
      controller: MenuController,
      controllerAs: 'menu',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function MenuController($log, currentPage, fbMenu, authentication) {
      var vm = this;
      vm.menuItems = fbMenu;
      vm.auth = authentication;
      vm.loaded = false;

      vm.menuItems.$loaded(function() {
        vm.loaded = true;
      }, function(error) {
        $log.error("Error loading menu items:", error);
      });

      vm.isCategory = function(item){
        return item.url === undefined && item.category !== undefined;
      };
      vm.hasSubPages = function(item){
        return item.subPages !== undefined;
      };
      vm.getProcessedUrl = function(item){
        return vm.hasSubPages(item) ? '#' : '/' + item.url;
      };

      vm.isActive = function(menuItemUrl){
        return currentPage.getBaseUrl() === menuItemUrl;
      };

      initAffix();
      initImgRollover();
      initCollapseOnClick();
    }


    //TODO: Update jquery functions
    function initAffix(){
      $('#navbar-affix').affix({
        offset: {
          top: function () {
            /* Chrome refresh fix */
            var sel = $(".navbar-logo")[0];
            sel.style.display='none';
            /* jshint ignore:start */
            sel.offsetHeight; // no need to store this anywhere, the reference is enough
            /* jshint ignore:end */
            sel.style.display='inline';
            /*****/
            return 150;
          }
        }
      });
    }

    function initImgRollover(){
      $('a img[data-hover]').each(
        function(){
          $(this).parent().wrap('<div style="position: relative" class="' + $(this).attr("data-surrounding-class") + '" />');

          var imgHover = $('<img src="' + $(this).attr("data-hover") + '" style="position: absolute; left: 0; top: 0; z-index: 10; opacity: 0;"/>').attr("width", $(this).attr("width")).attr("height", $(this).attr("height"));
          $(this).parent().append(imgHover);

          var imgClick = $('<img src="' + $(this).attr("data-click") + '" style="position: absolute; left: 0; top: 0; z-index: 20; opacity: 0;"/>').attr("width", $(this).attr("width")).attr("height", $(this).attr("height"));
          $(this).parent().append(imgClick);

          imgClick.hover(
            function() {
              imgHover.stop().animate({"opacity": "1"}, 200);
            },
            function() {
              imgHover.stop().animate({"opacity": "0"}, 200);
            }
          );

          imgClick.mousedown(
            function() {
              $(this).stop().animate({"opacity": "1"}, 100);
            }
          );
          imgClick.mouseup(
            function() {
              $(this).stop().animate({"opacity": "0"}, 100);
            }
          );
          imgClick.mouseout(
            function() {
              $(this).stop().animate({"opacity": "0"}, 100);
            }
          );
        }
      );
    }

    function initCollapseOnClick(){
      var navMain = $(".navbar-collapse");

      navMain.on("click", "a", null, function () {
        if($(this).attr("data-toggle") !== 'dropdown'){
          navMain.collapse('hide');
        }
      });
    }
  }

})();
