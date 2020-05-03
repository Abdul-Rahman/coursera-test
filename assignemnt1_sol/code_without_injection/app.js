var app = angular.module('LunchCheck', []);
  app.controller('LunchCheckController', function($scope) {
      //$scope.input1 = "The quick brown fox jumps over the lazy dog";
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
  });