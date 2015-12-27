var ap=angular.module('searchapp',[]);
ap.controller('searchControl',function($scope,$http)
{
    $scope.activecard= null;
    $scope.activeelement='';
    $scope.show={
        'Environment': true,
        'Energy': false,
        'Manufacturing': false,
        'Food': false,
        'Health': false,
        'Digital': false
    }
    $http({
            method: 'GET',
            url: '/articles',
            params: {main_category: 'Environment'}
        }).success(function (response) {
            $scope.env=response;

        });
    $http({
        method: 'GET',
        url: '/articles',
        params: {main_category: 'Energy'}
    }).success(function(response){
        $scope.energy=response;
    });
    $http({
        method: 'GET',
        url: '/articles',
        params: {main_category: 'Manufacturing'}
    }).success(function(response){
        $scope.manu=response;
    });
    $http({
        method: 'GET',
        url: '/articles',
        params: {main_category: 'Digital'}
    }).success(function(response){
        $scope.digi=response;
    });
    $http({
        method: 'GET',
        url: '/articles',
        params: {main_category: 'Food'}
    }).success(function(response){
        $scope.food=response;
    });
    $http({
        method: 'GET',
        url: '/articles',
        params: {main_category: 'Health'}
    }).success(function(response){
        $scope.health=response;
    });
    $('li').on('click',function(){
        $scope.i=$(this).attr('id');
        if($scope.i=='Environment')
        {
            $scope.show.Environment=true;
            $scope.show.Energy=false;
            $scope.show.Manufacturing=false;
            $scope.show.Digital=false;
            $scope.show.Health=false;
            $scope.show.Food=false;
            $scope.activecard=null;
        }
        if($scope.i=='Energy')
        {
            $scope.show.Environment=false;
            $scope.show.Energy=true;
            $scope.show.Manufacturing=false;
            $scope.show.Digital=false;
            $scope.show.Health=false;
            $scope.show.Food=false;
            $scope.activecard=null;
        }
        if($scope.i=='Manufacturing')
        {
            $scope.show.Environment=false;
            $scope.show.Energy=false;
            $scope.show.Manufacturing=true;
            $scope.show.Digital=false;
            $scope.show.Health=false;
            $scope.show.Food=false;
            $scope.activecard=null;
        }
        if($scope.i=='Digital')
        {
            $scope.show.Environment=false;
            $scope.show.Energy=false;
            $scope.show.Manufacturing=false;
            $scope.show.Digital=true;
            $scope.show.Health=false;
            $scope.show.Food=false;
            $scope.activecard=null;
        }
        if($scope.i=='Health')
        {
            $scope.show.Environment=false;
            $scope.show.Energy=false;
            $scope.show.Manufacturing=false;
            $scope.show.Digital=false;
            $scope.show.Health=true;
            $scope.show.Food=false;
            $scope.activecard=null;
        }
        if($scope.i=='Food')
        {
            $scope.show.Environment=false;
            $scope.show.Energy=false;
            $scope.show.Manufacturing=false;
            $scope.show.Digital=false;
            $scope.show.Health=false;
            $scope.show.Food=true;
            $scope.activecard=null;
        }
    });

    $scope.activate=function(a){
    $scope.activecard=a;
    if($scope.show.Environment==true)
    {
        for(x=0;x<$scope.env.length;x++)
        {
            if($scope.env[x]._id==$scope.activecard)
            {
                $scope.activeelement=$scope.env[x]
                break;
            }
        }
    }
    else if($scope.show.Energy==true)
    {
        for(x=0;x<$scope.energy.length;x++)
        {
            if($scope.energy[x]._id==$scope.activecard)
            {
                $scope.activeelement=$scope.energy[x];
                break;
            }
        }
    }
    else if($scope.show.Manufacturing==true)
    {
        for(x=0;x<$scope.manu.length;x++)
        {
            if($scope.manu[x]._id==$scope.activecard)
            {
                $scope.activeelement=$scope.manu[x];
                break;
            }
        }
    }
    else if($scope.show.Food==true)
    {
        for(x=0;x<$scope.food.length;x++)
        {
            if($scope.food[x]._id==$scope.activecard)
            {
                $scope.activeelement=$scope.food[x];
                break;
            }
        }
    }
    else if($scope.show.Health==true)
    {
        for(x=0;x<$scope.health.length;x++)
        {
            if($scope.health[x]._id==$scope.activecard)
            {
                $scope.activeelement=$scope.health[x];
                break;
            }
        }
    }
    else
    {
        for(x=0;x<$scope.digi.length;x++)
        {
            if($scope.digi[x]._id==$scope.activecard)
            {
                $scope.activeelement=$scope.digi[x];
                break;
            }
        }
    }
}
    $scope.check=function()
    {
        if($scope.activecard==null)
        {
            return false;
        }
        return true;
    }
});

