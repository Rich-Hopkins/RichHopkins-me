(function () {
  'use strict';

  angular
    .module('app')
    .controller('CBIndex', ['GetDataService', CBIndex]);

  function CBIndex(GetDataService) {
    var vm = this;
    GetDataService.getAllRecipes()
      .then(function (data) {
        vm.recipes = data.Sheet1;
        },
      function (error) {
        console.log(error);
      });

    return vm;
  };
})();