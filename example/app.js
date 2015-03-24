 angular.module('stickyDividersDemo', ['ionic','angular.filter','angular.ionic-sticky-list-dividers'])
.controller('DemoController', ['$scope','$filter', function($scope,$filter) {
    $scope.transactions = [
        {"Day":"day1","name":"test"},
        {"Day":"day1","name":"test"},
        {"Day":"day2","name":"test"},
        {"Day":"day2","name":"test"},
        {"Day":"day2","name":"test"},
        {"Day":"day3","name":"test"}
    ];


    $scope.transactions2=[
        {"Day":"day1","name":"test1"},
        {"Day":"day1","name":"test2"},
        {"Day":"day2","name":"test3"},
        {"Day":"day2","name":"test4"},
        {"Day":"day2","name":"test5"},
        {"Day":"day3","name":"test6"}
    ];
    $scope.buttonClick=function(){
        console.log('variable changed');
        $scope.transactions=$scope.transactions2;
        //$scope.$apply();
    };
}]);