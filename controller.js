var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
    $http.get("http://localhost:3000/user")
    .then(function(response) {
            $scope.jsondata = response.data.users;
            console.log($scope.jsondata)
        });
});