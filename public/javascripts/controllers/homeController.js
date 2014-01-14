angular.module('HomeController', [])
.controller('HomeController', [
    '$scope',
    '$location',
    function($scope, $location) {
        $scope.toNew = function() {
            $location.path('/new');
        }
    }
]);