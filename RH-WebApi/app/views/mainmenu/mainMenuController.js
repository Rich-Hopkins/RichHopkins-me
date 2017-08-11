(function () {
	'use strict';

	angular
		.module('app')
		.controller('MainMenu', ['$scope', '$location', MainMenu]);

	function MainMenu($scope, $location) {
		$scope.isNavCollapsed = true;

		$scope.navigate = function(path) {
			if (!$scope.isNavCollapsed) {
				console.log($scope.isNavCollapsed);
				$scope.isNavCollapsed = true;
			};
			$location.url('/' + path);
		};
	};
})();