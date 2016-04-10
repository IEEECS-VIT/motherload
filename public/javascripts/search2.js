var ap=angular.module('searchapp',[]);
ap.controller('searchControl',function($scope,$http){
    $scope.heading="Environment";
    $('#heading').css({
        color: op[0].color
    });
    $('hr').css({
        background: op[0].color
    });
    $scope.items=new Array(6);
    $http({
        method: 'GET',
        url: '/articles',
        params:{main_category: 'Environment'}
    }).success(function (response) {
        $scope.items[0] = response;
        console.log('success');
        console.log($scope.items[0].length);
    });
    $http({
        method: 'GET',
        url: '/articles',
        params: {main_category: 'Energy'}
    }).success(function (response) {
        $scope.items[1] = response;
        console.log('success for energy');
        console.log($scope.items[1].length);
    });
    $http({
        method: 'GET',
        url: '/articles',
        params: {main_category: 'Manufacturing'}
    }).success(function (response) {
        $scope.items[2] = response;
        console.log('success for manufacturing');
        console.log($scope.items[2].length);
    });
    $http({
        method: 'GET',
        url: '/articles',
        params: {main_category: 'Digital'}
    }).success(function (response) {
        $scope.items[3] = response;
        console.log('success for digital');
        console.log($scope.items[3].length);
    });
    $http({
        method: 'GET',
        url: '/articles',
        params: {main_category: 'Food'}
    }).success(function (response) {
        $scope.items[4] = response;
        console.log('success for food');
        console.log($scope.items[4].length);
    });
    $http({
        method: 'GET',
        url: '/articles',
        params: {main_category: 'Health'}
    }).success(function (response) {
        $scope.items[5] = response;
        console.log('success for health');
        console.log($scope.items[5].length);
    });



    $scope.display = function(a){
        $scope.heading=op[a].name;
        $('#heading').css({
            color: op[a].color
        });
        $('hr').css({
            background: op[a].color
        });
        for(var i=0;i<op.length;i++)
        {
            $('#'+op[i].name).css({
                background: op[i].color,
                zIndex: 0,
                boxShadow: '0 5px 5px rgba(0,0,0,0)',
                left: '0px'
            })
        }
        $('#'+op[a].name).css({
            background: 'white',
            zIndex: 20,
            boxShadow: '5px 5px 5px rgba(0,0,0,0.5)',
            left: '5px'
        })
    }

});
