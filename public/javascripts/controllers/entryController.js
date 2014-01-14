angular.module('EntryController', [])
.controller('EntryController', [
    '$scope',
    '$filter',
    '$http',
    '$window',
    function($scope, $filter, $http, $window) {
        $scope.reading = {};
        var dateFilter = $filter('date');

        $scope.reading.date = new Date().toISOString().substr(0, 10);
        $scope.reading.time = dateFilter(new Date(), 'HH:mm');
        $scope.reading.sugar = 0;
        $scope.reading.unitsOfInsulin = 0;
        $scope.reading.typeOfInsulin = '';

        $scope.save = function() {
            var p = $http.post('/reading/new', $scope.reading);

            p.then(function(r) {
                console.log(r.data);

                $window.history.back();
            });
        }
    }
]);