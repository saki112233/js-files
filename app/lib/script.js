

var myApp=angular.module("myninjaApp",['ngRoute']);
myApp.config(['$routeProvider',function($routeProvider){
$routeProvider.when('/home',
{templateUrl:'views/home.html'}).when('/directory',{
    templateUrl:'views/directory.html',
    controller:'ninjaController'
}).otherwise({
    redirectTo:'/home'
})
}]);
// ninjaApp.run(function(){});
myApp.controller("ninjaController",function($scope){
    $scope.removeTile=function (Tile){
        var substraction=$scope.massege.indexOf(Tile);
        $scope.massege.splice(substraction,1);
    }
    $scope.addition=function(){
        $scope.massege.push({
            name:$scope.newfield.name,
            belt:$scope.newfield.belt,
            rate:parseInt($scope.newfield.rate),
            available:true
        });
        $scope.newfield.name="";
        $scope.newfield.belt="";
        $scope.newfield.rate="";
    }
$scope.massege=[
    {
        name:'youshi',
        belt:"green",
        rate:20,
        available:false,
        thumb:"app/lib/imge.jpg"
    },
    {
        name:'trun',
        belt:"yellow",
        rate:25,
        available:true,
        thumb:"app/lib/imge.jpg"
    },
    {
        name:'sam',
        belt:"black",
        rate:30,
        available:false,
        thumb:"app/lib/imge.jpg"
    },
    {
        name:'shaun',
        belt:"white",
        rate:45,
        available:true,
        thumb:"app/lib/imge.jpg"
    },
    {
        name:'flaming',
        belt:"red",
        rate:50,
        available:false,
        thumb:"app/lib/imge.jpg"
    }
];
});
// var app = angular.module("myApp", []);
// app.controller("myCtrl", function ($scope, $location, $anchorScroll) {
//     $scope.scrollTo = function (scrollLocation) {
//         $location.hash(scrollLocation);
//         $anchorScroll.yOffset = 20;
//         $anchorScroll();
//     };
//     $scope.lastName = "Doe";
//     $scope.toggle = function () {
//         console.log('hello');
//     }
// });