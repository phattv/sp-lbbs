/**
 * Created by PHAT on 3/27/16.
 */
(function () {
  'use strict';

  angular
    .module('lbbs')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
      function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });

        $urlRouterProvider.otherwise('/');

        $stateProvider
          .state('main', {
            abstract: true,
            templateUrl: './app/modules/layout/main.html'
          })
          .state('main.dashboard', {
            url: '/',
            templateUrl: './app/modules/dashboard/dashboard.html',
            controller: 'dashboardController',
            controllerAs: 'vm'
          })
          .state('main.hose', {
            abstract: true,
            template: '<div ui-view></div>'
          })
          .state('main.hose.list', {
            url: '/hose',
            templateUrl: './app/modules/hose/hose.html',
            controller: 'hoseController',
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