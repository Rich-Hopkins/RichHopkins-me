(function () {
	'use strict';

	angular
		.module('app')
		.controller('Home', ['SlideService', Home]);

	function Home(SlideService) {
		var vm = this;
		vm.interval = 5000;
		vm.noWrapSlides = false;
		vm.active = 0;

		SlideService.getAllSlides()
			.then(function (data) {
				vm.slides = data;
			},
			function (error) {
				console.log(error);
			});

		return vm;
	};


})();