/**
 * Created by PHAT on 3/27/16.
 */
(function () {
  'use strict';

  angular
    .module('lbbs')
    .controller('hoseController', ['$state', 'hoseService',
      function ($state, hoseService) {
        var vm = this;

        vm.hoses = [];
        vm.goToDetailsView = goToDetailsView;

        function init() {
          hoseService.getHoses()
            .then(function(response) {
              vm.hoses = response;
            })
        }

        function goToDetailsView(hose) {
          $state.go('main.hose.details', {
            hoseId: hose.id
          })
        }

        init();
      }
    ])
})();