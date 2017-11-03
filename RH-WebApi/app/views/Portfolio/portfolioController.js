(function() {
	'use strict';

	angular
		.module('app')
		.controller('Portfolio', ['GetDataService', Portfolio]);

	function Portfolio(GetDataService) {
		var vm = this;

		GetDataService.getPortfolioTiles()
			.then(function(data) {
					vm.tiles = data;
			},
										function(error){
			console.log(error);
		});
		

		return vm;
	}
})();
