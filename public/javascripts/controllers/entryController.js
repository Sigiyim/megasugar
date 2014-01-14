angular.module('EntryController', [])
.controller('EntryController', [
    '$scope',
    '$filter',
    function($scope, $filter) {
        $scope.reading = {};
        var dateFilter = $filter('date');

        $scope.reading.date = new Date().toISOString().substr(0, 10);
        $scope.reading.time = dateFilter(new Date(), 'HH:mm');
        $scope.reading.sugar = 0;
        $scope.reading.unitsOfInsulin = 0;
//        $scope.reading.typeOfInsulin = '';
    }
]);