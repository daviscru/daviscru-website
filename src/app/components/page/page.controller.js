(function() {
  'use strict';

  angular
    .module('davisCru')
    .controller('PageController', PageController);

  /** @ngInject */
  function PageController($scope, currentPage, fbWidgets, authentication) {
    var vm = this;
    vm.auth = authentication;
    vm.loadStatus = 'loading';

    vm.addWidget = addWidget;
    vm.swapAlignment = swapAlignment;
    vm.toggleDivider = toggleDivider;
    vm.moveWidgetUp = moveWidgetUp;
    vm.moveWidgetDown = moveWidgetDown;
    vm.deleteWidget = deleteWidget;

    activate();

    function activate() {
      var fbWidgetsObj = fbWidgets(currentPage.url);
      fbWidgetsObj.$bindTo($scope, 'widgets').then(function () {
        if ($scope.widgets[0] === undefined) {
          vm.loadStatus = 'error';
        } else {
          vm.loadStatus = 'success';
        }
      });
    }

    function addWidget(type){
      var i;
      for(i = 0; $scope.widgets[i + 1] !== undefined; i++){};
      $scope.widgets[i + 1] = {widgetType: type};
    }

    function swapAlignment(widget){
      widget.alignment = widget.alignment === "left" ? "right" : "left";
    }

    function toggleDivider(widget){
      widget.hasDivider = !widget.hasDivider;
    }

    function moveWidgetUp(index){
      if($scope.widgets[index - 1] !== undefined){
        var currentWidget = $scope.widgets[index];
        $scope.widgets[index] = $scope.widgets[index - 1];
        $scope.widgets[index - 1] = currentWidget;
      }
    }

    function moveWidgetDown(index){
      if($scope.widgets[index + 1] !== undefined){
        var currentWidget = $scope.widgets[index];
        $scope.widgets[index] = $scope.widgets[index + 1];
        $scope.widgets[index + 1] = currentWidget;
      }
    }

    function deleteWidget(index){
      var found = false;
      for(var i = index; $scope.widgets[i + 1] !== undefined; i++){
        $scope.widgets[i] = $scope.widgets[i + 1];
        delete $scope.widgets[i + 1];
        found = true;
      }
      if(!found){
        delete $scope.widgets[index];
      }
    }

  }
})();
