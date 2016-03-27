/**
 * Created by PHAT on 3/22/16.
 */
(function() {
  'use strict';

  angular
    .module('lbbs')
    .controller('dashboardController', [
      function() {
        var vm = this;
        vm.title = 'Dashboard view';
      }
    ])
})();