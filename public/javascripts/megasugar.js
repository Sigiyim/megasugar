angular.module("megasugar", [
    'ngRoute',
    'UserService'
])
.controller("TestController", [
    '$scope',
    'UserService',
    function($scope, UserService) {
        $scope.userName = '';

        UserService.getCurrent().then(function(r) {
            $scope.userName = r.data.userName;
        });
    }
]);