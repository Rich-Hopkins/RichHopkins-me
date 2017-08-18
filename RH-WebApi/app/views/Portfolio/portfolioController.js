(function() {
	'use strict';

	angular
		.module('app')
		.controller('Portfolio', ['PortfolioService', Portfolio]);

	function Portfolio(PortfolioService) {
		var vm = this;

		PortfolioService.getAllTiles()
			.then(function(data) {
					vm.tiles = data;
			},
				function(error){
			console.log(error);
		});
		

		return vm;
	}
})();
