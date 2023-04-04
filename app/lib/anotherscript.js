var app = angular.module("Demo", ["ngRoute"]).
    config(function ($routeProvider,$location) {
        $routeProvider.when("/home", {
            templateUrl: "home.html",
            controller: "homeController"
        }).when("/course", {
            templateUrl: "course.html",
            controller: "courseController"
        }).when("/student", {
            templateUrl: "student.html",
            controller: "studentController"
        })
        $location.html5Mode(true);
    }).controller("homeController", function ($scope) {
        $scope.message = "Home Page";
    }).controller("courseController", function ($scope) {
        $scope.course = ["c", "c++", "java", "sql server"];
    }).controller("studentController", function ($scope) {
        $scope.students = ["jack", "joe", "ben", "mark"];
    })