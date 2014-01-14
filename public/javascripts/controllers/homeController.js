angular.module('HomeController', [])
.controller('HomeController', [
    '$scope',
    '$location',
    '$http',
    function($scope, $location, $http) {
        $scope.readings = [];

        var p = $http.get("/reading/list", {})

        p.then(function(r) {
            $scope.readings = r.data;
        });

        $scope.toNew = function() {
            $location.path('/new');
        }
    }
]);