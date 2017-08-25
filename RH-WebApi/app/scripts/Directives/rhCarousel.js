(function () {
	'use strict';

	angular
		.module('app')
		.directive('rhCarousel',
		function () {
			return {
				templateUrl: 'app/views/templates/homeCarousel.html'
			};
		});
})();