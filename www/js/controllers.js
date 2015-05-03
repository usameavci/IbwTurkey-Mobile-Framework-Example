angular.module('ibwturkey.controllers', [])
.controller('MainCtrl', function($scope) {
})
.controller('DashCtrl', function($scope) {
	$scope.landing = true;
})
.controller('SpeakersCtrl', function($scope, $state, SpeakersModel) {
	$scope.speakers = SpeakersModel.all();
	if ($state.current.name == 'tab.speaker')
		$scope.speaker = SpeakersModel.get($state.params.speakerId);
	$scope.remove = function(speakerId)
	{
		SpeakersModel.remove(speakerId);
	}
})
.controller('ProgramCtrl', function($scope, $stateParams) {
	$scope.tab = 1;
})
.controller('ContactCtrl', function($scope) {
});
