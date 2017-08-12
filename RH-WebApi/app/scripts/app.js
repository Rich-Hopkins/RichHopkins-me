(function () {
	'use strict';

	var app = angular.module('app', ['ngRoute', 'ngAnimate', 'ngTouch', 'ngSanitize', 'ui.bootstrap', 'ngResource']);
	app.config([
		'$routeProvider', '$locationProvider', '$resourceProvider',
		function ($routeProvider, $locationProvider, $resourceProvider) {
			$resourceProvider.defaults.stripTrailingSlashes = false;
			$routeProvider.caseInsensitiveMatch = true;
			$locationProvider.html5Mode(true);

			$routeProvider
				.when('/',
				{
					controller: 'Home',
					controllerAs: 'home',
					templateUrl: 'app/views/home/home.html'
				})
				.when('/netflix',
					{
						redirectTo: '/'
						//whatsonnetflix.com/netflix-hacks/the-netflix-id-bible-every-category-on-netflix
					})
				.when('/about',
				{
					controller: 'About',
					controllerAs: 'about',
					templateUrl: 'app/views/about/about.html'
				})
				.otherwise({ redirectTo: '/' });
		}
	]);
})();