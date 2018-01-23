(function () {
  'use strict';

  angular
    .module('app')
    .service('GetDataService', ['$resource','$http', '$q', GetDataService]);

  function GetDataService($resource, $http, $q) {
    return {
      //Fetch Netflix Genres
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

      //Fetch CB Recipe Categories
      getRecipeCategories: function () {
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

      //Fetch CB Recipes by Cagegory
      getRecipes: function (catId) {
        return $http.post('/api/cbindex?categoryId=' + catId)
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

      //Fetch Tiles for Portfolio Page
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

      //Fetch Photo Slides for Home Page
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