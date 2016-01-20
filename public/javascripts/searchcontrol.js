var ap=angular.module('searchapp',[]);
ap.controller('searchControl',function($scope,$http) {
    $scope.win = $(window).width();
    $scope.small = false;
    $scope.large = false;
    $scope.count=0;
    if ($scope.win > 600) {
        $scope.large = true;
    }
    else {
        $scope.small = true;
    }
    $scope.activecard = null;
    $scope.activeelement = '';
    $scope.show = {
        'Environment': true,
        'Energy': false,
        'Manufacturing': false,
        'Food': false,
        'Health': false,
        'Digital': false
    };
    $scope.color = {
        'Environment': '#64ce69',
        'Energy':'#ff9362',
        'Manufacturing':'#767676',
        'Digital': '#94a1e7',
        'Health': '#fe9c9b',
        'Food': '#d3b4a9'
    };
    $http({
        method: 'GET',
        url: '/articles',
        params: {main_category: 'Environment'}
    }).success(function (response) {
        $scope.env = response;
        if ($scope.large == true) {
            $scope.activate($scope.env[0]._id);
            $scope.count=1;
        }
    });
    $http({
        method: 'GET',
        url: '/articles',
        params: {main_category: 'Energy'}
    }).success(function (response) {
        $scope.energy = response;
    });
    $http({
        method: 'GET',
        url: '/articles',
        params: {main_category: 'Manufacturing'}
    }).success(function (response) {
        $scope.manu = response;
    });
    $http({
        method: 'GET',
        url: '/articles',
        params: {main_category: 'Digital'}
    }).success(function (response) {
        $scope.digi = response;
    });
    $http({
        method: 'GET',
        url: '/articles',
        params: {main_category: 'Food'}
    }).success(function (response) {
        $scope.food = response;
    });
    $http({
        method: 'GET',
        url: '/articles',
        params: {main_category: 'Health'}
    }).success(function (response) {
        $scope.health = response;
    });
    $(document).ready(function () {
        $("#overlay").on('click', function () {
            $(this).fadeOut();
            $('#popup-content').fadeOut();
        });

    });

    $scope.activate = function (a) {

        $scope.activecard = a;
        if ($scope.small == true) {
            $('#overlay').css({
                'display': 'block'
            });
            $('#popup-content').css({
                'display': 'block'
            })
        }
        if ($scope.show.Environment == true) {
            for (x = 0; x < $scope.env.length; x++) {
                if ($scope.activecard == $scope.env[x]._id) {
                    $scope.activeelement = $scope.env[x];
                    break;
                }
            }
            if ($scope.count == 1) {
                for (var i = 0; i < $scope.env.length; i++) {
                    var b = document.getElementById($scope.env[i]._id);
                    var c = b.children;
                    c[0].style.borderRight = 'solid ' + $scope.color.Environment + ' 0px';
                }
                var t = document.getElementById(a);
                var y = t.children;
                y[0].style.borderRight = 'solid ' + $scope.color.Environment + ' 7px';
            }
            else {
                $scope.count = 0;
            }
        }
        if ($scope.show.Energy == true) {
            for (x = 0; x < $scope.energy.length; x++) {
                if ($scope.activecard == $scope.energy[x]._id) {
                    $scope.activeelement = $scope.energy[x];
                    break;
                }
            }
                for (var i = 0; i < $scope.energy.length; i++) {
                    var b = document.getElementById($scope.energy[i]._id);
                    var c = b.children;
                    c[0].style.borderRight = 'solid ' + $scope.color.Energy + ' 0px';
                }
                var t = document.getElementById(a);
                var y = t.children;
                y[0].style.borderRight = 'solid ' + $scope.color.Energy + ' 7px';


        }
        if ($scope.show.Manufacturing == true) {
            for (x = 0; x < $scope.manu.length; x++) {
                if ($scope.activecard == $scope.manu[x]._id) {
                    $scope.activeelement = $scope.manu[x];
                    break;
                }
            }
            if ($scope.count == 1) {
                for (var i = 0; i < $scope.manu.length; i++) {
                    var b = document.getElementById($scope.manu[i]._id);
                    var c = b.children;
                    c[0].style.borderRight = 'solid ' + $scope.color.Manufacturing + ' 0px';
                }
                var t = document.getElementById(a);
                var y = t.children;
                y[0].style.borderRight = 'solid ' + $scope.color.Manufacturing + ' 7px';
            }
            else {
                $scope.count = 0;
            }
        }

        if ($scope.show.Digital == true) {
            for (x = 0; x < $scope.digi.length; x++) {
                if ($scope.activecard == $scope.digi[x]._id) {
                    $scope.activeelement = $scope.digi[x];
                    break;
                }
            }
            if ($scope.count == 1) {
                for (var i = 0; i < $scope.digi.length; i++) {
                    var b = document.getElementById($scope.digi[i]._id);
                    var c = b.children;
                    c[0].style.borderRight = 'solid ' + $scope.color.Digital + ' 0px';
                }
                var t = document.getElementById(a);
                var y = t.children;
                y[0].style.borderRight = 'solid ' + $scope.color.Digital + ' 7px';
            }
            else {
                $scope.count = 0;
            }
        }
        if ($scope.show.Health == true) {
            for (x = 0; x < $scope.health.length; x++) {
                if ($scope.activecard == $scope.health[x]._id) {
                    $scope.activeelement = $scope.health[x];
                    break;
                }
            }
            if ($scope.count == 1) {
                for (var i = 0; i < $scope.health.length; i++) {
                    var b = document.getElementById($scope.health[i]._id);
                    var c = b.children;
                    c[0].style.borderRight = 'solid ' + $scope.color.Health + ' 0px';
                }
                var t = document.getElementById(a);
                var y = t.children;
                y[0].style.borderRight = 'solid ' + $scope.color.Health + ' 7px';
            }
            else {
                $scope.count = 0;
            }
        }
        if ($scope.show.Food == true) {
            for (x = 0; x < $scope.food.length; x++) {
                if ($scope.activecard == $scope.food[x]._id) {
                    $scope.activeelement = $scope.food[x];
                    break;
                }
            }
            if ($scope.count == 1) {
                for (var i = 0; i < $scope.food.length; i++) {
                    var b = document.getElementById($scope.food[i]._id);
                    var c = b.children;
                    c[0].style.borderRight = 'solid ' + $scope.color.Food + ' 0px';
                }
                var t = document.getElementById(a);
                var y = t.children;
                y[0].style.borderRight = 'solid ' + $scope.color.Food + ' 7px';
            }
            else {
                $scope.count = 0;
            }
        }

    };
    $('li').on('click', function () {
            $scope.i = $(this).attr('id');
            if ($scope.i == 'Environment') {
                $scope.show.Environment = true;
                $scope.show.Energy = false;
                $scope.show.Manufacturing = false;
                $scope.show.Digital = false;
                $scope.show.Health = false;
                $scope.show.Food = false;
                if ($scope.large) {
                    $scope.activate($scope.env[0]._id);
                }

            }
            else if ($scope.i == 'Energy') {
                $scope.show.Environment = false;
                $scope.show.Energy = true;
                $scope.show.Manufacturing = false;
                $scope.show.Digital = false;
                $scope.show.Health = false;
                $scope.show.Food = false;
                if ($scope.large) {
                    $scope.activate($scope.energy[0]._id);
                }

            }
            else if ($scope.i == 'Manufacturing') {
                $scope.show.Environment = false;
                $scope.show.Energy = false;
                $scope.show.Manufacturing = true;
                $scope.show.Digital = false;
                $scope.show.Health = false;
                $scope.show.Food = false;
                if ($scope.large) {
                    $scope.activate($scope.manu[0]._id);
                }
            }
            else if ($scope.i == 'Digital') {
                $scope.show.Environment = false;
                $scope.show.Energy = false;
                $scope.show.Manufacturing = false;
                $scope.show.Digital = true;
                $scope.show.Health = false;
                $scope.show.Food = false;
                if ($scope.large) {
                    $scope.activate($scope.digi[0]._id);
                }
            }
            else if ($scope.i == 'Food') {
                $scope.show.Environment = false;
                $scope.show.Energy = false;
                $scope.show.Manufacturing = false;
                $scope.show.Digital = false;
                $scope.show.Health = false;
                $scope.show.Food = true;
                if ($scope.large) {
                    $scope.activate($scope.food[0]._id);
                }

            }
            else if ($scope.i == 'Health') {
                $scope.show.Environment = false;
                $scope.show.Energy = false;
                $scope.show.Manufacturing = false;
                $scope.show.Digital = false;
                $scope.show.Health = true;
                $scope.show.Food = false;
                if ($scope.large) {
                    $scope.activate($scope.health[0]._id);
                }
            }


    });
    $(window).resize(function () {
            $scope.win = $(window).width();
            if ($scope.win > 600) {
                $scope.large = true;
                $scope.small = false;
            }
            else {
                $scope.large = false;
                $scope.small = true;
            }

        })

});
