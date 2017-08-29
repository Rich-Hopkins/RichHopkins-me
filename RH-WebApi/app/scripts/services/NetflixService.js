(function () {
  'use strict';

  angular
    .module('app')
    .service('NetflixService', ['$http', '$q', NetflixService]);

  function NetflixService($http, $q) {
    return {
      getAllGenres: function () {
        return $http.get('/api/netflix')
          .then(function (response) {
            if (typeof response.data === 'object') {
              return response.data;
            } else {
              return $q.reject(response.data);
            }
          },
          function (response) {
            return $q.reject(response.data);
          });
      }
    };
  };
})();