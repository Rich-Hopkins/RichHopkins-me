(function () {
	'use strict';

	angular
		.module('app')
		.controller('Home', [Home]);

	function Home() {
		var vm = this;
		vm.eaa = "EAA 690";
		return vm;
	};


})();