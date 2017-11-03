(function () {
  'use strict';

  angular
    .module('app')
    .controller('Tictactoe', Tictactoe);

  function Tictactoe() {
    var vm = this;
    vm.spaces = [
      { index: 0, value: 0 },
      { index: 1, value: 0 },
      { index: 2, value: 0 },
      { index: 3, value: 0 },
      { index: 4, value: 0 },
      { index: 5, value: 0 },
      { index: 6, value: 0 },
      { index: 7, value: 0 },
      { index: 8, value: 0 }
    ];
    vm.player = 0;
    vm.winner = 0;
    vm.playerName = [''];
    vm.winnerName = '';
    vm.currentPlayer = '';
    vm.active = false;


    vm.selectPlayer = function (player) {
      vm.resetGame();
      vm.player = player;
      if (player === 1) {
        vm.playerName.push('Human');
        vm.playerName.push('Computer');
        vm.active = true;
      } else {
        vm.playerName.push('Computer');
        vm.playerName.push('Human');
        vm.active = true;
      }
    }

    vm.resetGame = function () {
      for (var i = 0; i < vm.spaces.length; i++) {
        vm.spaces[i].value = 0;
        vm.player = 0;
        vm.playerName = [''];
        vm.currentPlayer = '';
        vm.winner = 0;
        vm.active = false;
      }
    }

    vm.spaceClicked = function (space) {
      if (space.value === 0 && vm.player !== 0) {
        vm.index = space.index;
        space.value = vm.player;
        vm.turnEnded(vm.player);
      }
    }

    vm.turnEnded = function (playerNum) {
      vm.winner = checkForWinner(vm.spaces, playerNum);
      if (vm.winner !== 0) {
        vm.winnerName = vm.playerName[vm.winner];
        vm.active = false;
      } else {
        playerNum === 1 ? vm.currentPlayer = vm.playerName[2] : vm.currentPlayer = vm.playerName[1];
        if (vm.currentPlayer === 'Computer') vm.computerTurn();
      }
    }

    vm.computerTurn = function () {
      vm.turnEnded(3 - vm.player);
    }


    return vm;
  }

  function checkForWinner(grid, player) {
    var playerCells = [];
    for (var g = 0; g <= 8; g++) {
      if (grid[g].value === player) {
        playerCells.push(grid[g].index);
      }
    }
    if (playerWon(playerCells)) {
      return player;
    }
    return 0;
  }

  var winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  function playerWon(cells) {
    var str = '';
    cells.forEach(function (cell) {
      str += cell;
    });
    for (var wc = 0; wc < winningCombos.length; wc++) {
      var matches = 0;
      for (var ind = 0; ind < 3; ind++) {
        if (str.indexOf(winningCombos[wc][ind]) < 0) break;
        matches++;
      }
      if (matches === 3) return true;
    }
    return false;
  }

})();