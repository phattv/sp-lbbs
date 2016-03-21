/**
 * Created by PHAT on 3/22/16.
 */

(function() {
  'use strict';

  angular
    .module('lbbs', [
      'ui.router'
    ])
    .constant('constants', {})
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
      function($stateProvider, $urlRouterProvider, $locationProvider) {
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
    }])
    .run([function() {
      
    }]);
})();