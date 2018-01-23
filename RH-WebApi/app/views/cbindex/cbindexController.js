(function () {
  'use strict';

  angular
    .module('app')
    .controller('CBIndex', ['GetDataService', CBIndex]);

  function CBIndex(GetDataService) {
    var vm = this;
    vm.search = '';
    vm.waiting = true;
    GetDataService.getRecipeCategories()
      .then(function (data) {
        vm.categories = data;
        vm.selectedCategory = vm.categories[0];
        vm.categoryChanged();
      },
      function (error) {
        console.log(error);
      });

    vm.categoryChanged = function () {
      vm.waiting = true;
      GetRecipes(vm.selectedCategory.CategoryId);
    }

    vm.catDelete = function () {
      vm.waiting = true;
      vm.selectedCategory = 0;
      GetRecipes(0);
    };

    vm.searchDelete = function () {
      vm.search = '';
    };

    return vm;

    function GetRecipes(selectedCategory) {
      GetDataService.getRecipes(selectedCategory)
        .then(function (data) {
          vm.recipes = data;
          vm.waiting = false;
        }, function (error) {
          console.log(error);
        });
    }
  };
})();