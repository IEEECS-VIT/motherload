var ap=angular.module('searchapp',[]);
ap.controller('searchControl',function($scope,$http) {
    $scope.win = $(window).width();
    $scope.small=false;
    $scope.large=false;
    if($scope.win>600)
    {
        $scope.large=true;
    }
    else{
        $scope.small=true;
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
    $http({
        method: 'GET',
        url: '/articles',
        params: {main_category: 'Environment'}
    }).success(function (response) {
        $scope.env = response;
        if($scope.large==true){
            $scope.activate($scope.env[0]._id);
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
    $(document).ready(function(){
        $("#overlay").on('click',function(){
            $(this).fadeOut();
            $('#popup-content').fadeOut();
        }) ;
    });
    $scope.activate=function(a){
        $scope.activecard=a;
        if($scope.small==true)
        {
            $('#overlay').css({
                'display': 'block'
            })
            $('#popup-content').css({
                'display': 'block'
            })
        }
        if($scope.show.Environment==true){
            for(x=0;x<$scope.env.length;x++)
            {
                if($scope.activecard==$scope.env[x]._id)
                {
                    $scope.activeelement=$scope.env[x];
                    break;
                }
            }
        }
        if($scope.show.Energy==true){
            for(x=0;x<$scope.energy.length;x++)
            {
                if($scope.activecard==$scope.energy[x]._id)
                {
                    $scope.activeelement=$scope.energy[x];
                    break;
                }
            }
        }
        if($scope.show.Manufacturing==true){
            for(x=0;x<$scope.manu.length;x++)
            {
                if($scope.activecard==$scope.manu[x]._id)
                {
                    $scope.activeelement=$scope.manu[x];
                    break;
                }
            }
        }
        if($scope.show.Digital==true){
            for(x=0;x<$scope.digi.length;x++)
            {
                if($scope.activecard==$scope.digi[x]._id)
                {
                    $scope.activeelement=$scope.digi[x];
                    break;
                }
            }
        }
        if($scope.show.Health==true){
            for(x=0;x<$scope.health.length;x++)
            {
                if($scope.activecard==$scope.health[x]._id)
                {
                    $scope.activeelement=$scope.health[x];
                    break;
                }
            }
        }
        if($scope.show.Food==true){
            for(x=0;x<$scope.food.length;x++)
            {
                if($scope.activecard==$scope.food[x]._id)
                {
                    $scope.activeelement=$scope.food[x];
                    break;
                }
            }
        }

    };

    $('li').on('click',function(){
        $scope.i=$(this).attr('id');
        if($scope.i=='Environment'){
            $scope.show.Environment=true;
            $scope.show.Energy=false;
            $scope.show.Manufacturing=false;
            $scope.show.Digital=false;
            $scope.show.Health=false;
            $scope.show.Food=false;
            if($scope.large)
            {
                $scope.activate($scope.env[0]._id);
            }

        }
        else if($scope.i=='Energy'){
            $scope.show.Environment=false;
            $scope.show.Energy=true;
            $scope.show.Manufacturing=false;
            $scope.show.Digital=false;
            $scope.show.Health=false;
            $scope.show.Food=false;
            if($scope.large){
                $scope.activate($scope.energy[0]._id);
            }

        }
        else if($scope.i=='Manufacturing'){
            $scope.show.Environment=false;
            $scope.show.Energy=false;
            $scope.show.Manufacturing=true;
            $scope.show.Digital=false;
            $scope.show.Health=false;
            $scope.show.Food=false;
            if($scope.large){
                $scope.activate($scope.manu[0]._id);
            }
        }
        else if($scope.i=='Digital'){
            $scope.show.Environment=false;
            $scope.show.Energy=false;
            $scope.show.Manufacturing=false;
            $scope.show.Digital=true;
            $scope.show.Health=false;
            $scope.show.Food=false;
            if($scope.large)
            {
                $scope.activate($scope.digi[0]._id);
            }
        }
        else if($scope.i=='Food'){
            $scope.show.Environment=false;
            $scope.show.Energy=false;
            $scope.show.Manufacturing=false;
            $scope.show.Digital=false;
            $scope.show.Health=false;
            $scope.show.Food=true;
            if($scope.large){
                $scope.activate($scope.food[0]._id);
            }

        }
        else if($scope.i=='Health'){
            $scope.show.Environment=false;
            $scope.show.Energy=false;
            $scope.show.Manufacturing=false;
            $scope.show.Digital=false;
            $scope.show.Health=true;
            $scope.show.Food=false;
            if($scope.large){
                $scope.activate($scope.health[0]._id);
            }
        }


    });
    $(window).resize(function(){
        $scope.win=$(window).width();
        if($scope.win>600)
        {
            $scope.large=true;
            $scope.small=false;
        }
        else{
            $scope.large=false;
            $scope.small=true;
        }

    })

});
