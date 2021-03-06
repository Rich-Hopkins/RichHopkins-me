﻿(function () {
  'use strict';

  angular
    .module('app')
    .controller('Netflix', ['GetDataService', Netflix]);

  function Netflix(GetDataService) {
    var vm = this;
    GetDataService.getAllGenres()
      .then(function (data) {
        vm.genres = data;
      },
      function (error) {
        console.log(error);
      });

    return vm;
  };
})();