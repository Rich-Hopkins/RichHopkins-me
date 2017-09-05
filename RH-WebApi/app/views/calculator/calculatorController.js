(function () {
  'use strict';

  angular
    .module('app')
    .controller('Calculator', Calculator);

  function Calculator() {
    var vm = this;
    vm.display = '0';
    vm.invalid = false;

    vm.concat = function (numberToAdd) {
      if (vm.display === '0') vm.display = '';
      vm.display = vm.display + numberToAdd.toString();
      if (vm.display.length > 10) {
        vm.display = 'OVERFLOW';
        vm.invalid = true;
      }
    };

    vm.clear = function() {
      vm.display = '0';
      vm.invalid = false;
    }

    return vm;
  }

})();