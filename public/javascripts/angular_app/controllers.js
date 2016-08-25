var controllers = {};
controllers.main =function($scope){
   $scope.setup = function(){authorize();};
};
controllers.contact =function($scope){};
controllers.events =function($scope, $http) {
    // add all categories here and use these arrays with ng repeat to generate page
    $scope.events = [];
    $scope.myData = [];
    $scope.categories = [];
    $scope.subCategories = [];
    $scope.showCategories = true;
    $scope.categorySelected='';
    $scope.heading='Categories';
    $scope.array=[];
    $scope.showSingleEvent=false;
    $scope.showWorkshops=false;
    $scope.showAllEvents=false;
    $scope.showSubcategories=false;
    $http.get("https://sheets.googleapis.com/v4/spreadsheets/1Dvte1G3lvQCUW_EFDrwa85SGt7asl_2CTk7MnUTj6tg/values/10-09!A3:N15").then(function (response){
        $scope.x=response.data;
        console.log(x);
    });
    $http.get("http://register.vitgravitas.com/api/events/name?q=").then(function (response) {
        $scope.mydata = response.data;

        $scope.events = $scope.mydata.events;
        for (var i = 0; i < $scope.events.length; i++) {
            var cat = $scope.events[i].category;
            if ($scope.categories.length != 0) {
                var flag = 0;

                for (var j = 0; j < $scope.categories.length; j++) {

                    if (cat == $scope.categories[j]) {
                        flag = 1;
                        break;
                    }
                }
                if (flag == 0) {
                    $scope.categories.push(cat);
                }
            }
            else {
                $scope.categories.push(cat);
            }

        }

        for (var i = 0; i < $scope.events.length; i++) {
            if ($scope.events[i].subCategory != null) {
                var scat = $scope.events[i].subCategory;
                if ($scope.subCategories.length != 0) {
                    var flag = 0;

                    for (var j = 0; j < $scope.subCategories.length; j++) {

                        if (scat == $scope.subCategories[j]) {
                            flag = 1;
                            break;
                        }
                    }
                    if (flag == 0) {
                        $scope.subCategories.push(scat);
                    }
                }
                else {
                    $scope.subCategories.push(scat);
                }
            }
        }


    });
    $scope.showCategory=function(i)
    {
        $scope.categorySelected=$scope.categories[i];
        $scope.showCategories=false;
        $scope.heading=titleCase($scope.categories[i]);
        if(i==0)
        {
            $scope.showWorkshops=true;
            $scope.showAllEvents=false;
            $scope.showSubcategories=false;
        }
        else{
            $scope.showWorkshops=false;
            $scope.showAllEvents=false;
            $scope.showSubcategories=true;
        }
    };
    $scope.showEvent=function(a)
    {
        $scope.singleEvent=a;
        $scope.showSingleEvent=true;
    };
    $scope.showEvents=function(i)
    {
        $scope.showAllEvents=true;
        $scope.showWorkshops=false;
        $scope.showSingleEvent=false;
        $scope.heading=titleCase($scope.subCategories[i]);
        $scope.scat=$scope.subCategories[i];
        $scope.showSubcategories=false;
    };
    $scope.hideEvent=function(){
        $scope.showSingleEvent=false;

    };
    $scope.backToCategories=function(){
        $scope.showWorkshops=false;
        $scope.showCategories=true;
        $scope.showSubcategories=false;
        $scope.heading='Categories';
    };
    $scope.backToSubcategories=function(){
        $scope.showSubcategories=true;
        $scope.showAllEvents=false;
        $scope.heading='Events';
    }
};
function titleCase(x){
    var word = x.charAt(0).toUpperCase()+ x.slice(1);
    return word;
}
controllers.team =function($scope){
    $scope.chief = [
        {
            'name': 'GV',
            'designation': '',
            'img': 'insert url'
        }
    ];
    // follow the above example for the rest
};
controllers.register =function($scope){};
controllers.sponsors =function($scope){
    $scope.major = [
        {
            'name':'Insert name',
            'img': 'img url'
        }
    ];
    //Do same for other sponsors when they turn up
};
controllers.about =function($scope){};

app.controller(controllers);