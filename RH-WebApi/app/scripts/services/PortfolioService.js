(function () {
	'use strict';

	angular
		.module('app')
		.service('PortfolioService', ['$http', '$q', PortfolioService]);

	function PortfolioService($http, $q) {
		return {
			getAllTiles: function () {
				return $http.get('/api/portfolio')
					.then(function (response) {
							if (typeof response.data === 'object') {
								return response.data;
							} else {
								return $q.reject(response.data);
							}
						},
						function (response) {
							return $q.reject(response.data);
						});
			}
		};
	};
})();