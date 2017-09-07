(function () {
  'use strict';

  angular
    .module('app')
    .controller('Tictactoe', Tictactoe);

  function Tictactoe() {
    var vm = this;
    vm.spaces = [
      { index: 0, value: 1 },
      { index: 1, value: 2 },
      { index: 2, value: 1 },
      { index: 3, value: 0 },
      { index: 4, value: 1 },
      { index: 5, value: 0 },
      { index: 6, value: 2 },
      { index: 7, value: 1 },
      { index: 8, value: 1 }
    ];
    vm.player = 1;


    vm.spaceClicked = function (space) {
      if (space.value === 0) {
        space.value = vm.player;
      }
    }

    return vm;
  }

})();