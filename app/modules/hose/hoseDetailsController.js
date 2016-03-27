/**
 * Created by PHAT on 3/27/16.
 */
(function () {
  'use strict';

  angular
    .module('lbbs.modules.hose')
    .controller('hoseDetailsController', ['$state', '$stateParams', 'hoseService',
      function ($state, $stateParams, hoseService) {
        var vm = this;
        vm.hose = {};
        vm.relatedHoses = [];
        vm.goToDetailsView = goToDetailsView;

        function init() {
          hoseService.getHoseById($stateParams.hoseId)
            .then(function (response) {
              vm.hose = response;
            });

          hoseService.getHoses()
            .then(function (response) {
              vm.relatedHoses = response;
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