(function () {
  'use strict';

  angular
    .module('app')
    .controller('Calculator', Calculator);

  function Calculator() {
    var vm = this;
    vm.display = '0';
    vm.invalid = false;
    vm.operands = [];
    vm.operators = [];
    vm.running = '';
    vm.reset = false;

    vm.concat = function (charToAdd) {
      if (vm.reset) vm.running = '';
      if (!displayNumeric(vm.display) || vm.display === '0' || vm.reset) {
        vm.display = '';
        vm.reset = false;
      }
      if (vm.display.includes('.') && charToAdd === '.') {
        //do nothing
      } else {
        vm.display = vm.display + charToAdd.toString();
        if (vm.display === '.') vm.display = '0.';
      }
      if (vm.display.length > 10) {
        vm.display = 'OVERFLOW';
        vm.invalid = true;
      }
    };

    vm.allClear = function () {
      vm.display = '0';
      vm.operands = [];
      vm.operators = [];
      vm.running = '';
      vm.invalid = false;
    }

    vm.clearEntry = function () {
      vm.display = '0';
      vm.invalid = false;
    }

    vm.operation = function (oper) {
      if (!isNaN(vm.display) && vm.display !== '') {
        vm.running += vm.display;
        vm.running += oper;
        vm.operands.push(parseFloat(vm.display));
        vm.operators.push(oper);
      } else {
        vm.operators.pop();
        vm.operators.push(oper);
        vm.running = vm.running.substring(0, vm.running.length - 1);
        vm.running += oper;
      }
      vm.display = oper;
    }

    vm.equals = function () {
      if (displayNumeric(vm.display)) {
        vm.operands.push(vm.display);
        vm.running += vm.display;
      } else {
        vm.operators.pop();
        vm.display = vm.operands[vm.operands.length - 1];
      }
      if (vm.operands.length > 1) {
        vm.display = calculateTotal(vm.operands, vm.operators).toString();
      }
      vm.operands = [];
      vm.operators = [];
      vm.reset = true;
    }

    return vm;
  }

  function displayNumeric(display) {
    return display !== '/' && display !== '*' && display !== '-' && display !== '+';
  }

  function calculateTotal(operands, operators) {
    var total = parseFloat(operands[0]);
    for (var i = 0; i < operands.length - 1; i++) {
      var nextOperand = parseFloat(operands[i + 1]);
      var operator = operators[i];

      if (operator === '*') { total *= nextOperand }
      else if (operator === '/') { total /= nextOperand }
      else if (operator === '-') { total -= nextOperand }
      else if (operator === '+') { total += nextOperand }
    }

    return total;
  }

})();