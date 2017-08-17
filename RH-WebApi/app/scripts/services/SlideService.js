(function () {
	'use strict';

	angular
		.module('app')
		.service('SlideService', ['$http', '$q', SlideService]);

	function SlideService($http, $q) {
		return {
			getAllSlides: function () {
				return $http.get('/api/slides')
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