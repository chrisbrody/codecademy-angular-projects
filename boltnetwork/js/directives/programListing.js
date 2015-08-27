app.directive('programListing', function() {
	return {
		restrict: 'E',
		scope: {
			listing: '=listing'
		},
		templateUrl: 'js/directives/programListing.html'
	}
});