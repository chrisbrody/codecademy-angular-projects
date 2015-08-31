app.controller('MainCtrl', ['$scope', 'email', function ($scope, email) {
  email.success(function(data){
    $scope.emails = data;
  });

}]);