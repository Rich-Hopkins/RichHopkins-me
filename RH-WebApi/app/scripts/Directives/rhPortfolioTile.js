(function () {
	'use strict';

	angular
		.module('app')
		.directive('rhPortfolioTile',
		function () {
			return {
				templateUrl: 'app/views/templates/portfolioTile.html'
			};
		});
})();