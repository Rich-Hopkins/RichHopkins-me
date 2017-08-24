(function () {
    'use strict';

    angular
        .module('app')
        .service('emailService', ['$resource', emailService]);

    function emailService($resource) {
        return $resource('/api/email');
    };

})();