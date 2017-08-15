(function () {
	'use strict';

	angular
		.module('app')
		.controller('Home', [Home]);

	function Home() {
		var vm = this;
		vm.slides = [];
		vm.interval = 5000;
		vm.noWrapSlides = false;
		vm.active = 0;
		vm.currIndex = 0;
		
		vm.slides.push({
			image: 'app/images/Tri-Motor-3x2-600w.jpg',
			title: 'NC8407',
			desc: '1929 Ford Tri-Motor in flight',
			id: vm.currIndex++
		},
			{
				image: 'app/images/Tri-Motor-Tail-9x16-270w.jpg',
				title: 'NC8407',
				desc: 'Tail of 1929 Ford Tri-Motor',
				id: vm.currIndex++
			});

		return vm;
	};


})();