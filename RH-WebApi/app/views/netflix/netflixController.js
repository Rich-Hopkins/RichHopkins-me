(function () {
  'use strict';

  angular
    .module('app')
    .controller('Netflix', ['NetflixService', Netflix]);

  function Netflix(NetflixService) {
    var vm = this;
    NetflixService.getAllGenres()
      .then(function (data) {
        vm.genres = data;
      },
      function (error) {
        console.log(error);
      });

    return vm;
  };
})();