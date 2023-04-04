
var myApp = angular.module("myModule", [])
    .controller("myController", function ($scope,stringService) {
        var employees = [
            {
                name: "Ben",
                dob: new Date("November 21,1980"),
                gender: 1,
                city: [{ nameOne: "Delhi" }, { name: "Goa" }],
                salary: 200
            },
            {
                name: "Sara",
                dob: new Date("May 15,1985"),
                gender: 2,
                city: [{ nameOne: "London" }, { name: "Menchester" }],
                salary: 300
            },
            {
                name: "Mark",
                dob: new Date("Augst 23,1970"),
                gender: 1,
                city: [{ nameOne: "Tottenhum" }, { name: "Barminghum" }],
                salary: 400
            },
            {
                name: "Pam",
                dob: new Date("March 18,1975"),
                gender: 2,
                city: [{ nameOne: "Karachi" }, { name: "Dohar" }],
                salary: 500
            },
            {
                name: "Tod",
                dob: new Date("June 10,1979"),
                gender: 3,
                city: [{ nameOne: "Nanchang" }, { name: "Shenjen" }],
                salary: 600
            },

        ]

        $scope.transformString = function (input) {
          
            $scope.output = stringService.processString(input);
        }
        $scope.employees = employees;
        $scope.employeeView = "employeeTable.html";
        $scope.rowLimit = 3;
        $scope.sortColumn = 'name';
        $scope.reverseSort = false;
        $scope.sortData = function (column) {
            $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
            $scope.sortColumn = column;
        }
        $scope.getSortClass = function (column) {
            if ($scope.sortColumn == column) {
                return $scope.reverseSort ? 'arrow-down' : 'arrow-up'
            }
            return '';
        }
        $scope.search = function (item) {
            if ($scope.searchText == undefined) {
                return true;
            } else {
                if (item.name.toLowerCase().indecOf($scope.searchText.toLowerCase()) != -1 ||
                    item.city.toLowerCase().indecOf($scope.searchText.toLowerCase()) != -1) {
                    return true;
                }
            }
            return false;
        }
        // $scope.increment = function (technologies) {
        //     technologies.likes++;
        // }
        // $scope.decrement = function (technologies) {
        //     technologies.dislikes++;
        // }
    });
// myApp.controller("myController",function($scope){
//     var employee={
//         firstName:"Faisal",
//         lastName:"Ahmed",
//         gender:'Male'
//     }
//     $scope.employee=employee;
// });