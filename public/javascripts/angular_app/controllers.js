
var controllers={};
controllers.input = function ($scope, $http, FileUploader,$location) {
    $scope.setup = function(){
        $('.collapsible').collapsible({
            accordion: false
        });
        $scope.state=user_login($http,checkState);
    };
    var checkState = function(state){
        $scope.state=state;
        if(!$scope.state){
            $location.path('/login');

        }
        return state;
    };

    $scope.formDatain = {};
    $scope.formDataFind = {};
    $scope.formDataGet = {};
    $scope.formDelete = {};
    $scope.formImage = {};
    $scope.findMessage = null;
    $scope.uploader = new FileUploader({
        url: '/input/upload'
    });
    $scope.uploader.onSuccessItem = function(fileItem, response, status, headers) {
        alert(response.message);
        console.info('onSuccessItem', fileItem, response, status, headers);
    };
    $scope.addImage = function () {

        $scope.uploader.queue[0].upload();
    };

    $scope.findData = function () {
        find_article($http, $scope)
    };
    $scope.processForm = function () {
        newArticle($http, $scope);
    };
    $scope.editArticle = function () {
        var formDataEdit = {};
        formDataEdit.e_m_category = $scope.formDataGet.main_category;
        formDataEdit.e_c_name = $scope.formDataGet.c_name;
        formDataEdit.e_contentText = $scope.formDataGet.content;
        console.log(formDataEdit);
        edit($http, $scope, formDataEdit);
    };
    $scope.deleteArticle = function () {
        deleteArt($http, $scope);
    };

};
controllers.login = function($scope, $http,$location){
    $scope.setup = function(){
       $scope.state=user_login($http,checkState);
        console.log($scope.state);
    };
    var checkState = function(state){
        $scope.state=state;
        if($scope.state){
            $location.path('/input');
        }
        console.log(state);
       return state;
    };


};

app.controller(controllers);