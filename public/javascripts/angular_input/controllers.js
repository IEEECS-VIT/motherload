var controllers = {};
controllers.input = function ($scope, $http, FileUploader, $location) {
    /**
     * Setup
     */

    $scope.setup = function () {
        $('.collapsible').collapsible({
            accordion: false
        });
        $scope.state = user_login($http, checkState);
    };
    /**
     * Go to login
     */
    var completedEntry = function () {
        $location.path('/login');
    };
    var checkState = function (state) {
        $scope.state = state;
        if (!$scope.state) {
            $location.path('/login');

        }
        return state;
    };

    $scope.formDatain = {};
    $scope.formDataFind = {};
    $scope.formDataGet = {};
    $scope.formDelete = {};
    /*$scope.formImage = {};*/
    $scope.findMessage = null;
   /* $scope.uploader = new FileUploader({
        url: '/input/upload'
    });*/
    /*$scope.uploader.onSuccessItem = function (fileItem, response, status, headers) {
        alert(response.message);
        console.info('onSuccessItem', fileItem, response, status, headers);
    };*/
    /*$scope.addImage = function () {
        if ($scope.formDatain.logo) {
            $scope.formDatain.logo = parseImageName($scope.formDatain.logo);
            $scope.uploader.queue[0].upload();
        }
        else if ($scope.formDataGet.logo) {
            $scope.formDataGet.logo = parseImageName($scope.formDataGet.logo);
            $scope.uploader.queue[0].upload();
        }
        else {
            alert('Enter Company Name');
        }
    };*/
    $scope.findData = function () {
        find_article($http, $scope)
    };
    $scope.processForm = function () {
        if ($scope.formDatain.c_name.length > 0) {
          /*  if ($scope.formDatain.logo) {
                var file = document.getElementById('newimgfile').files[0];
                var fileSizeKB = file.size / 1024;
                if (fileSizeKB < 300) {
                    $scope.addImage();
                }
                else {
                    alert('File size exceeds limit.');
                }
            }
            else {
                $scope.formDatain.logo = null;
            }*/

            newArticle($http, $scope);
            completedEntry();
        }
    };
    $scope.editArticle = function () {
        var formDataEdit = {};
       /* if ($scope.formDataGet.logo) {
            var file = document.getElementById('editimgfile').files[0];
            var fileSizeKB = file.size / 1024;
            if (fileSizeKB < 300) {
                $scope.addImage();
            }
            else {
                alert('File size exceeds limit.');
            }
        }*/
        formDataEdit.e_m_category = $scope.formDataGet.main_category;
        formDataEdit.e_c_name = $scope.formDataGet.c_name;
        formDataEdit.e_contentText = $scope.formDataGet.content;
        formDataEdit.e_vid = $scope.formDataGet.vid;
        formDataEdit.e_website = $scope.formDataGet.website;
        edit($http, $scope, formDataEdit);
        completedEntry();
    };
    $scope.deleteArticle = function () {
        deleteArt($http, $scope);
        completedEntry();
    };

};
controllers.login = function ($scope, $http, $location) {
    $scope.setup = function () {
        $scope.state = user_login($http, checkState);
        console.log($scope.state);
    };
    var checkState = function (state) {
        $scope.state = state;
        if ($scope.state) {
            $location.path('/input');
        }
        console.log(state);
        return state;
    };


};

app.controller(controllers);