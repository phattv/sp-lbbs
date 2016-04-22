/**
 * Created by PHAT on 3/27/16.
 */
(function () {
  'use strict';

  angular
    .module('lbbs.modules.hose', [])
    .config(['$stateProvider',
      function ($stateProvider) {

        $stateProvider
          .state('main.hose', {
            abstract: true,
            templateUrl: './app/modules/hose/hose.html'
          })
          .state('main.hose.menu', {
            url: '/hose',
            templateUrl: './app/modules/hose/menu.html'
          })
          .state('main.hose.list', {
            url: '/hose/list',
            templateUrl: './app/modules/hose/hoseList.html',
            controller: 'hoseListController',
            controllerAs: 'vm'
          })
          .state('main.hose.details', {
            url: '/hose/:hoseId',
            templateUrl: './app/modules/hose/hoseDetails.html',
            controller: 'hoseDetailsController',
            controllerAs: 'vm'
          })
      }])
})();