(function () {
  'use strict';

  angular
    .module('app')
    .controller('Contact', ['emailService', Contact]);

  function Contact(emailService) {
    var vm = this;

    vm.msg = {
      name: '',
      address: '',
      message: '',
      body: ''
    };

    vm.emailFormat = /^[a-zA-Z]+[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z.]{2,10}$/;
    vm.visitedEmail = false;
    vm.visitedName = false;
    vm.visitedMessage = false;
    vm.contactForm = {};
    vm.submitted = false;
    vm.sendSuccess = false;
    vm.sendFailed = false;
    vm.waiting = false;

    vm.sendMail = function (form) {
      vm.submitted = true;
      vm.waiting = true;
      vm.sendSuccess = false;
      vm.sendFailed = false;
      vm.msg.message = vm.msg.message.replace(/(\r\n|\n|\r|\n\r)/gm, '<br/>');

      var sendMessage = new emailService();
      sendMessage.$save(vm.msg)
        .then(function () {
          vm.sendSuccess = true;
          vm.sendFailed = false;
          vm.waiting = false;
          vm.clear();
        })
        .catch(function () {
          vm.sendSuccess = false;
          vm.sendFailed = true;
          vm.waiting = false;
          vm.submitted = false;
        });
    };

    vm.clear = function () {
      vm.msg.name = '';
      vm.msg.address = '';
      vm.msg.message = '';
      vm.msg.body = '';
      vm.visitedEmail = false;
      vm.visitedName = false;
      vm.visitedMessage = false;
      vm.submitted = false;
      vm.mailResult = false;
    };

    vm.cancel = function () {
      vm.clear();
      vm.sendSuccess = false;
      vm.sendFailed = false;
    };

    vm.submitDisabled = function (form) {
      if (angular.isUndefined(vm.msg.message) || vm.msg.message === null) return true;
      return !form.$valid || vm.submitted || vm.msg.message.length < 75;
    }

    return vm;
  }
})();