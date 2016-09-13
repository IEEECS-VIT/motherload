app.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: '/main',
            controller: 'main'
        })
        .when('/events', {
            templateUrl: '/events',
            controller: 'events'
        })
        .when('/about',{
            templateUrl: '/about',
            controller: 'about'
        })
        .when('/contact',{
            templateUrl: '/contact',
            controller: 'contact'
        })
        .when('/contact',{
            templateUrl: '/contact',
            controller: 'contact'
        })
        .when('/about',{
            templateUrl: '/about',
            controller: 'about'
        })
        .when('/register',{
            templateUrl: '/register',
            controller: 'register'
        })
        .when('/sponsors',{
            templateUrl: '/sponsors',
            controller: 'sponsors'
        })
        .when('/team',{
            templateUrl:'/team',
            controller: 'team'
        })
        .when('/schedule',{
            templateUrl:'/schedule',
            controller: 'schedule'
        })
        .when('/organizers',{
            templateUrl:'/organizers',
            controller: 'organizers'
        }).when('/papers',{
            templateUrl:'/papers',
            controller: 'papers'
        }).when('/accommodation',{
                templateUrl:'/accommodation',
                controller: 'accommodation'
            }).when('/speakers',{
            templateUrl:'/speakers',
            controller: 'speakers'
        })
});

