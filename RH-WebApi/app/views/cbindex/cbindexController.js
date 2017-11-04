(function () {
  'use strict';

  angular
    .module('app')
    .controller('CBIndex', ['GetDataService', CBIndex]);

  function CBIndex(GetDataService) {
    var vm = this;
    vm.search = '';
    GetDataService.getAllRecipes()
      .then(function (data) {
        vm.recipes = data.Sheet1;
        vm.category = 'Appetizers';
      },
      function (error) {
        console.log(error);
      });

    vm.catDelete = function() {
      vm.category = '';
    };

    vm.searchDelete = function() {
      vm.search = '';
    };

    return vm;
  };
})();