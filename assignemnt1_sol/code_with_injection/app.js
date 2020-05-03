var app = angular.module('LunchCheck', []);
  app.controller('LunchCheckController', LunchCheckController );
      
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController ($scope){
      $scope.wordChecker = function() {
        if ($scope.input1 == "" || $scope.input1 == undefined ) {
          // return "Please enter data first";
          $scope.result = "Please enter data first";
          return;
        }
        $scope.words = $scope.input1.split(',');
        if ($scope.words.length <=3 ) {
          //return "Enjoy!";
          $scope.result = "Enjoy!";
        }
        else if ($scope.words.length >3 ) {
          //return "Too much!";
          $scope.result = "Too much!";
        }
      };
    };


