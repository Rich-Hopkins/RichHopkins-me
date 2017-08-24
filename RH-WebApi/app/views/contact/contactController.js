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
            message: ''
        };

        vm.emailFormat = /^[a-zA-Z]+[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z.]{2,10}$/;
        vm.visitedEmail = false;
        vm.visitedName = false;
        vm.visitedMessage = false;
        vm.contactForm = {};
        vm.submitted = false;
        vm.sendSuccess = false;
        vm.sendFailed = false;
        vm.captcha = '';
        vm.visitedCaptcha = false;
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
            vm.visitedEmail = false;
            vm.visitedName = false;
            vm.visitedMessage = false;
            vm.submitted = false;
            vm.mailResult = false;
            vm.visitedCaptcha = false;
            vm.captcha = '';
        };

        vm.cancel = function () {
            vm.clear();
            vm.sendSuccess = false;
            vm.sendFailed = false;
        };

        vm.captchaWrongNotBlank = function () {
            if (angular.isUndefined(vm.captcha) || vm.captcha == '') return false;
            return vm.captcha !== '4805';

        };

        vm.submitDisabled = function (form) {
            if (angular.isUndefined(vm.msg.message) || vm.msg.message === null) return true;
            return !form.$valid || vm.submitted || vm.msg.message.length < 75 || vm.captcha.trim() !== '4805';
        }

        return vm;
    }
})();