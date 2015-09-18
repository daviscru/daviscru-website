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

    function swapAlignment(widget){
      widget.alignment == "left" ? widget.alignment = "right" : widget.alignment = "left";
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
      for(var i = index; $scope.widgets[i + 1] != undefined; i++){
        $scope.widgets[i] = $scope.widgets[i + 1];
        delete $scope.widgets[i + 1];
      }
    }

  }
})();
