(function () {
	'use strict';

	angular
		.module('app')
		.controller('Home', ['GetDataService', Home]);

	function Home(GetDataService) {
		var vm = this;
		vm.interval = 5000;
		vm.noWrapSlides = false;
		vm.active = 0;

	  GetDataService.getPhotoSlides()
			.then(function (data) {
				vm.slides = data;
			},
			function (error) {
				console.log(error);
			});

		return vm;
	};


})();