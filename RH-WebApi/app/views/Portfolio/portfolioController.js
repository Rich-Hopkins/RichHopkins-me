(function () {
	'use strict';

	angular
		.module('app')
		.controller('Portfolio', Portfolio);

	function Portfolio() {
		var vm = this;

		vm.tiles = [
			{
				Id: 0,
				Title: 'GitHub',
				ImageUrl: '/app/images/portfolio/github.jpg',
				LinkUrl: 'https://github.com/Rich-Hopkins/FPCOakwood-AngularJS',
				Caption: 'My GitHub profile, starting with my most recent repo.'
			}, {
				Id: 1,
				Title: 'First Pentecostal Church',
				ImageUrl: '/app/images/portfolio/fpc.jpg',
				LinkUrl: 'http://fpcoakwood.org',
				Caption: 'I created this site for my church, and used it to teach myself AngularJS and ASP.NET Web API.'
			}
		];

		return vm;
	}
})();
