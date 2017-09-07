(function () {
  'use strict';

  angular
    .module('app')
    .controller('Pomodoro', ['$timeout', Pomodoro]);

  function Pomodoro($timeout) {
    var vm = this;
    vm.sessionLength = 25;
    vm.breakLength = 5;
    vm.secondsLeft = vm.sessionLength * 60;
    vm.secondsStart = vm.sessionLength * 60;
    vm.displayRemaining = convertSecondsToHMS(vm.secondsLeft);
    vm.progress = 100;
    vm.session = true;
    vm.running = false;
    vm.myTimeout = null;
    vm.mode = 'Session';

    vm.adjustLength = function (parameter, direction) {
      if (!vm.running) {
        if (parameter === 'break') {
          direction === '+' ? vm.breakLength++ : vm.breakLength--;
        } else {
          direction === '+' ? vm.sessionLength++ : vm.sessionLength--;
        }
        vm.mode = 'Session';
        vm.session = true;
        vm.secondsLeft = vm.sessionLength * 60;
        vm.secondsStart = vm.secondsLeft;
        vm.displayRemaining = convertSecondsToHMS(vm.secondsLeft);
        vm.progress = 100 * vm.secondsLeft / vm.secondsStart;
      }
    };

    vm.toggleRun = function () {
      vm.running = !vm.running;
      if (vm.running) {
        vm.myTimeout = $timeout(vm.onTimeout, 1000);
      } else {
        $timeout.cancel(vm.myTimeout);
      }
    }

    vm.onTimeout = function () {
      if (vm.secondsLeft <= 0) {
        vm.session = !vm.session;
        if (vm.session) {
          vm.mode = 'Session';
          playAlarm(new Audio('app/audio/communication-channel.mp3'), 3);
          vm.secondsLeft = vm.sessionLength * 60;
          vm.secondsStart = vm.secondsLeft;
        } else {
          vm.mode = 'Break';
          playAlarm(new Audio('app/audio/filling-your-inbox.mp3'), 3);
          vm.secondsLeft = vm.breakLength * 60;
          vm.secondsStart = vm.secondsLeft;
        }
      }
      vm.secondsLeft--;
      vm.displayRemaining = convertSecondsToHMS(vm.secondsLeft);
      vm.progress = 100 * vm.secondsLeft / vm.secondsStart;
      vm.myTimeout = $timeout(vm.onTimeout, 1000);
    }

    return vm;
  }

  function convertSecondsToHMS(seconds) {
    var hours = parseInt(seconds / 3600);
    var secondsRemaining = seconds - hours * 3600;
    var minutes = parseInt(seconds / 60);
    secondsRemaining -= minutes * 60;
    if (minutes < 10) minutes = '0' + minutes;
    if (secondsRemaining < 10) secondsRemaining = '0' + secondsRemaining;
    return hours + ':' + minutes + ':' + secondsRemaining;
  }

  function playAlarm(audio, times) {
    var loop = setInterval(repeat, 2000);

    function repeat() {
      times--;
      if (times === 0) {
        clearInterval(loop);
      }
      audio.play();
    }

    repeat();
  }
})();