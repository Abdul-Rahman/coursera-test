var app=angular.module("LunchCheck",[]);function LunchCheckController(e){e.wordChecker=function(){""!=e.input1&&null!=e.input1?(e.words=e.input1.split(","),e.words.length<=3?e.result="Enjoy!":e.words.length>3&&(e.result="Too much!")):e.result="Please enter data first"}}app.controller("LunchCheckController",LunchCheckController),LunchCheckController.$inject=["$scope"];