(function () {
  'use strict';

  angular
    .module('app')
    .controller('CBIndex', ['GetDataService', CBIndex]);

  function CBIndex(GetDataService) {
    var vm = this;
    vm.search = '';
    GetDataService.getRecipeCategories()
      .then(function (data) {
        vm.categories = data;
        vm.selectedCategory = vm.categories[0];
      },
      function (error) {
        console.log(error);
      });

    //GetDataService.getRecipes(1)
    //  .then(function (data) {
    //    vm.recipes = data;
    //  },
    //  function (error) {
    //    console.log(error);
    //  });

    //GetDataService.                                                         //TODO create recipe service like email service and call it

    vm.catDelete = function () {
      vm.selectedCategory = null;
    };

    vm.searchDelete = function () {
      vm.search = '';
    };

    return vm;
  };
})();