angular.module("megasugar", ['ngRoute'])
.controller("TestController", [
    '$scope',
    function($scope) {
        $scope.text = 'Test';
    }
]);