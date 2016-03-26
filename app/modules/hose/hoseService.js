/**
 * Created by PHAT on 3/27/16.
 */
(function () {
  'use strict';

  angular
    .module('lbbs')
    .factory('hoseService', ['$q',
      function ($q) {
        // Mock data
        var hoses = [];
        for (var i = 0; i < 10; i++) {
          hoses.push({
            id: i,
            name: 'E00' + i,
            description: 'Male Hose Nipple',
            material: 'Plated Steel',
            npt: 0.125,
            fittingType: 'Male Hose Nipple'
          })
        }

        function getHoses() {
          var defer = $q.defer();
          defer.resolve(hoses);
          return defer.promise;
        }

        function getHoseById(hoseId) {
          var defer = $q.defer();
          defer.resolve(_.find(hoses, function(hose) {
            return hose.id == hoseId;
          }));
          return defer.promise;
        }

        return {
          getHoses: getHoses,
          getHoseById: getHoseById
        };
      }
    ])
})();