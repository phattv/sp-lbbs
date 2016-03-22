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

        vm.products = [];

        for(var i = 0; i < 10; i++) {
          vm.products.push({
            name: 'E00' + i,
            description: 'Male Hose Nipple',
            material: 'Plated Steel',
            npt: 0.125,
            fittingType: 'Male Hose Nipple'
          })
        }
      }
    ])
})();