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
        vm.slides = [
          '/app/assets/img/banner/banner_Electrical-Fastening.jpg',
          '/app/assets/img/banner/banner_Energy-Solutions.jpg',
          '/app/assets/img/banner/banner_Hose.jpg',
          '/app/assets/img/banner/banner_Industrial-Solutions.jpg',
          '/app/assets/img/banner/banner_Tool-Solution.jpg'
        ]
      }
    ])
})();