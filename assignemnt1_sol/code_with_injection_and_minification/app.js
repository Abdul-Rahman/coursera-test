/* The following code is commented because it's not minified. 
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
*/

//Following is the minified version of above code
var app=angular.module("LunchCheck",[]);function LunchCheckController(e){e.wordChecker=function(){""!=e.input1&&null!=e.input1?(e.words=e.input1.split(","),e.words.length<=3?e.result="Enjoy!":e.words.length>3&&(e.result="Too much!")):e.result="Please enter data first"}}app.controller("LunchCheckController",LunchCheckController),LunchCheckController.$inject=["$scope"];