/**
 * Created by PHAT on 3/27/16.
 */
(function () {
  'use strict';

  angular
    .module('lbbs.modules.menu', [])
    .config(['$stateProvider',
      function ($stateProvider) {

        $stateProvider
          .state('main.hoseMenu', {
            url: '/hose-solutions',
            templateUrl: './app/modules/menu/hoseMenu.html'
          })
          .state('main.electricalMenu', {
            url: '/electrical-fastening',
            templateUrl: './app/modules/menu/electricalMenu.html'
          })
          .state('main.industrialMenu', {
            url: '/industrial-solutions',
            templateUrl: './app/modules/menu/industrialMenu.html'
          })
          .state('main.toolMenu', {
            url: '/tool-solutions',
            templateUrl: './app/modules/menu/toolMenu.html'
          })
          .state('main.energyMenu', {
            url: '/energy-solutions',
            templateUrl: './app/modules/menu/energyMenu.html'
          })
          .state('main.catalogueMenu', {
            url: '/catalogues',
            templateUrl: './app/modules/menu/catalogueMenu.html'
          })
      }])
})();