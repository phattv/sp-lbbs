/**
 * Created by PHAT on 3/27/16.
 */
(function() {
  'use strict';

  angular
    .module('lbbs')
    .controller('hoseDetailsController', ['$stateParams', 'hoseService',
      function($stateParams, hoseService) {
        var vm = this;

        function init() {
          hoseService.getHoseById($stateParams.hoseId)
            .then(function(response) {
              vm.hose = response;
            })
        }

        init();
      }
    ])
})();