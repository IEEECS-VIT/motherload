var ap=angular.module('searchapp',[]);
ap.controller('searchControl',function($scope,$http){
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
    $scope.display=function(a)
    {
        console.log("clicked");
        var x=document.getElementById(a);
        x.style.left='10px';
    }
});
