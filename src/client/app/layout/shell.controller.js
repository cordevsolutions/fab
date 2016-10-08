(function () {
	'use strict';

	angular
		.module('app.layout')
		.controller('ShellController', ShellController);

	ShellController.$inject = ['$rootScope', '$timeout', 'config', 'logger'];
	/* @ngInject */
	
	function ShellController($rootScope, $timeout, config, logger) {
		var vm = this;
		vm.busyMessage = 'Please wait ...';
		vm.isBusy = true;
		$rootScope.showSplash = true;
		vm.navline = {
			title: config.appTitle,
			text: 'Cordev Solutions, Inc',
			link: 'http://twitter.com/fitadbeer',
			image: 'images/MossyRockOutcrop.jpg'
		};

		activate();

		function activate() {
			logger.success(config.appTitle + ' loaded!', null);
			hideSplash();
		}

		function hideSplash() {
			//Force a 1 second delay so we can see the splash.
			$timeout(function () {
				$rootScope.showSplash = false;
			}, 10);
		}
	}
})();