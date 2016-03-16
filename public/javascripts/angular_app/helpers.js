/**
 * Created by Shivam Mathur on 22-06-2015.
 */
/***
 * Ajax Calls
 *
 */
function edit($http, $scope, editData) {
    $http({
        method: 'POST',
        url: '/input/edit',
        data: $.param(editData),  // pass in data as strings
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}  // set the headers so angular passing info as form data (not request payload)
    })
        .success(function (data) {
            console.log(data);
            // if successful, bind success message to message
                $scope.msg = data.message;
                alert($scope.msg+data.name);
                clearData($scope);

        }).error(function(data){console.log(data);});
}
function newArticle($http, $scope) {
    $http({
        method: 'POST',
        url: '/input/new',
        data: $.param($scope.formDatain),  // pass in data as strings
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}  // set the headers so angular passing info as form data (not request payload)
    })
        .success(function (data) {
            console.log(data);

            if (!data) {
                // if not successful, bind errors to error variables
                $scope.message = data.message;

            } else {
                // if successful, bind success message to message
                $scope.message = data.message;
                alert($scope.message);
                clearData($scope);
            }
        });
}
function deleteArt($http, $scope) {
    $http({
        method: 'POST',
        url: '/input/delete',
        data: $.param($scope.formDelete),  // pass in data as strings
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}  // set the headers so angular passing info as form data (not request payload)
    })
        .success(function (data) {
            console.log(data);

            if (!data) {
                // if not successful, bind errors to error variables
                $scope.message = data.message;

            } else {
                // if successful, bind success message to message
                $scope.message = data.message;
                alert($scope.message);

            }
        });
}
function clearData($scope) {
    $scope.formDatain = {};
    $scope.formDataGet = {};
    $scope.findMessage = null;
}
function find_article($http, $scope) {
    $http({
        method: 'POST',
        url: '/input/find',
        data: $.param($scope.formDataFind),  // pass in data as strings
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}  // set the headers so angular passing info as form data (not request payload)
    })
        .success(function (data) {
            console.log(data);

            if (!data) {
                // if not successful, bind errors to error variables
                $scope.findMessage = "Not Found";

            } else {
                // if successful, bind success message to message
                $scope.findMessage = data.message;

                $scope.formDataGet = data.results;
                console.log(data);
            }
            alert($scope.findMessage);
        }).error(function(data,status){
            if(status==404)
                alert(data.message);
            else if(status==500)
                alert('Internal Server Error');
            else
                console.log(status);
        });
}

function user_login($http,callback) {
    $http({
        method: 'GET',
        url: '/users'
    }).success(function (data) {
        callback(data.message);

    });
}/*
function parseImageName(path){
    var filename;
    var i = path.lastIndexOf('\\');
    var j = path.lastIndexOf('/');
    console.log(path.length);
    if(i>j){
        filename = path.substr(i+1,path.length-1);
    }
    else if(j>i){
        filename = path.substr(j+1,path.length-1);
    }else{
        filename = path;
    }
    console.log(filename);
    return filename.replace(/\s+/g, "").toLowerCase()
}*/