(function () {
  'use strict';

  angular
    .module('app')
    .controller('Pomodoro', Pomodoro);

  function Pomodoro() {
    var vm = this;
    vm.sessionLength = 25;
    vm.timeLeft = 25;
    vm.breakLength = 5;
    vm.running = false;

    vm.adjustLength = function (parameter, direction) {
      if (parameter === 'break') {
        direction === '+' ? vm.breakLength++ : vm.breakLength--;
      } else {
        direction === '+' ? vm.sessionLength++ : vm.sessionLength--;
      }
    };


    vm.play = function () {
      playAlarm(new Audio('app/audio/filling-your-inbox.mp3'), 3);
    };

    return vm;
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