angular.module('ibwturkey', ['ionic', 'ibwturkey.controllers', 'ibwturkey.services'])
.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			StatusBar.styleLightContent();
		}
	});
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
	$ionicConfigProvider.views.maxCache(0);

	$stateProvider
		.state('tab', {
		url: "/tab",
		abstract: true,
		templateUrl: "templates/tabs.html"
	})
	.state('tab.dash', {
		cache : false,
		url: '/',
		views: {
			'tab-landing': {templateUrl: 'templates/landing.html',controller: 'DashCtrl'}
		}
	})
	.state('tab.speakers', {
		url: '/konusmacilar',
		views: {
			'tab-speaker': {templateUrl: 'templates/speakers.html', controller: 'SpeakersCtrl' }
		}
	})
	.state('tab.speaker', {
		url: '/konusmaci/:speakerId',
		views: {
			'tab-speaker': {templateUrl: 'templates/speaker.html',controller: 'SpeakersCtrl'}
		}
	})
	.state('tab.program', {
		url: '/program',
		views: {
			'tab-program': {templateUrl: 'templates/program.html',controller: 'ProgramCtrl'}
		}
	})
	.state('tab.contact', {
		url: '/iletisim',
		views: {
			'tab-contact': {templateUrl: 'templates/contact.html',controller: 'ContactCtrl'}
		}
	})
	$urlRouterProvider.otherwise('/tab/');
});
