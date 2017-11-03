(function () {
  'use strict';

  angular
    .module('app')
    .service('GetDataService', ['$http', '$q', GetDataService]);

  function GetDataService($http, $q) {
    return {
      getAllGenres: function() {
        return $http.get('/api/netflix')
          .then(function(response) {
              if (typeof response.data === 'object') {
                return response.data;
              } else {
                return $q.reject(response.data);
              }
            },
            function(response) {
              return $q.reject(response.data);
            });
      },

      getAllRecipes: function () {
        return $http.get('/api/cbindex')
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
      },

      getPortfolioTiles: function () {
        return $http.get('/api/portfolio')
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
      }, 

      getPhotoSlides: function () {
        return $http.get('/api/slides')
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