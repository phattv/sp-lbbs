/**
 * Created by PHAT on 3/27/16.
 */
(function() {
  'use strict';

  angular
    .module('lbbs.modules.hose')
    .controller('hoseDetailsController', ['$stateParams', 'hoseService',
      function($stateParams, hoseService) {
        var vm = this;
        vm.hose = {};
        vm.relatedHoses = [];

        function init() {
          hoseService.getHoseById($stateParams.hoseId)
            .then(function(response) {
              vm.hose = response;
            });

          hoseService.getHoses()
            .then(function(response) {
              vm.relatedHoses = response;
            })
        }

        init();
      }
    ])
})();