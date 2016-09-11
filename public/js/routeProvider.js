var app = angular.module("ngScheduler", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "html/home.html"
    })
    .when("/settings", {
        templateUrl : "html/settings.html"
    })

});
