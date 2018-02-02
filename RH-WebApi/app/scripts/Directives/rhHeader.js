(function () {
  'use strict';

  angular
    .module('app')
    .directive('rhHeader',
      function () {
        return {
          templateUrl: 'app/views/templates/header.html'
        };
      });
})();