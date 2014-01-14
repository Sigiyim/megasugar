angular.module("megasugar", [
    'ngRoute',
    'HomeController',
    'EntryController',
    'UserService'
])
.config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider.when("/", {
            controller : 'HomeController',
            templateUrl : '/javascripts/templates/home.html'
        }).when('/new', {
            controller : 'EntryController',
            templateUrl : '/javascripts/templates/entry.html'
        })
        .otherwise({
            redirectTo : '/'
        });
    }
]);