var app = angular.module('app', ["ngRoute", "xeditable"]);

app.run(function(editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

app.config(['$routeProvider', function($routeProvider) {
    
    $routeProvider.
    when('/projects/:projectId', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl'
    }).
    when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
    }).
    when('/', {
        templateUrl: 'views/landing.html',
        controller: 'LandingCtrl'
    }).
    otherwise({
        redirectTo: '/'
    });
    
}]);