(function() {
  'use strict';

  describe('path', function(){
    var $rootScope, $location, $state, $stateParams, $templateCache, global;

    function mockTemplate(templateRoute, tmpl) {
      $templateCache.put(templateRoute, tmpl || templateRoute);
    }

    function goTo(url) {
      $location.url(url);
      $rootScope.$digest();
    }

    beforeEach(function() {
      module('davisCru');

      inject(function (_$rootScope_, _$location_, _$state_, _$stateParams_, _$templateCache_, _global_) {
        $rootScope = _$rootScope_;
        $location = _$location_;
        $state = _$state_;
        $stateParams = _$stateParams_;
        $templateCache = _$templateCache_;
        global = _global_;
      });
      mockTemplate('/app/components/page/page.html');
    });


    describe('when empty', function () {
      beforeEach(function(){
        goTo('');
      });
      it('should go to the pages state', function () {
        expect($state.current.name).toEqual('pages');
      });
      it('pageUrl should be an empty string', function () {
        expect($stateParams.pageUrl).toEqual('');
      });
      it('global.pageUrl should be home', function () {
        expect(global.getPageUrl()).toEqual('home');
      });
    });
    describe('/', function () {
      beforeEach(function(){
        goTo('/');
      });
      it('should go to the pages state', function () {
        expect($state.current.name).toEqual('pages');
      });
      it('pageUrl should be an empty string', function () {
        expect($stateParams.pageUrl).toEqual('');
      });
      it('global.pageUrl should be home', function () {
        expect(global.getPageUrl()).toEqual('home');
      });
    });
    describe('/home', function () {
      beforeEach(function(){
        goTo('/home');
      });
      it('should go to the pages state', function () {
        expect($state.current.name).toEqual('pages');
      });
      it('pageUrl should be home', function () {
        expect($stateParams.pageUrl).toEqual('home');
      });
      it('global.pageUrl should be home', function () {
        expect(global.getPageUrl()).toEqual('home');
      });
    });
    describe('/get-connected', function () {
      beforeEach(function(){
        goTo('/get-connected');
      });
      it('should go to the pages state', function () {
        expect($state.current.name).toEqual('pages');
      });
      it('pageUrl should be get-connected', function () {
        expect($stateParams.pageUrl).toEqual('get-connected');
      });
      it('global.pageUrl should be get-connected', function () {
        expect(global.getPageUrl()).toEqual('get-connected');
      });
    });
    describe('/get-connected/weekly-meeting', function () {
      beforeEach(function(){
        goTo('/get-connected/weekly-meeting');
      });
      it('should go to the pages state', function () {
        expect($state.current.name).toEqual('pages');
      });
      it('pageUrl should be get-connected/weekly-meeting', function () {
        expect($stateParams.pageUrl).toEqual('get-connected/weekly-meeting');
      });
      it('global.pageUrl should be get-connected/weekly-meeting', function () {
        expect(global.getPageUrl()).toEqual('get-connected/weekly-meeting');
      });
    });
    /*describe('otherwise', function () {
      it('should go to the 404 state', function () {
        goTo('someNonExistentUrl');
        expect($state.current.name).toEqual('pages');
      });
      it('should not change the url', function () {
        var badUrl = '/someNonExistentUrl';
        goTo(badUrl);
        expect($location.url()).toEqual(badUrl);
      });
    });*/
  });
})();
