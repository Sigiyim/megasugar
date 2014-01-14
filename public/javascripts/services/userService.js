angular.module('UserService', [])
.service('UserService', [
    '$http',
    function($http) {
        this.getCurrent = function() {
            return $http.get('/user/current');
        }
    }
]);