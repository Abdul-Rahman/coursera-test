//Following code is commented due to its not minified. 
/*(function () {
'use strict';
angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function FoundItemsDirective() {
  var ddo = {
    restrict: "E",
    templateUrl: 'itemsFound.html',
    scope: {
      foundItems: '<',
      onRemove: '&'
    }
  }
  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.searchTerm = "";
  menu.found = [];

  menu.searchMenu = function () {
    if (!menu.searchTerm) {
      menu.found = [];
      return;
    }

    var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);

    promise.then(function (foundItems) {
        menu.found = foundItems;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  };

  menu.removeItem = function (itemIndex) {
    menu.found.splice(itemIndex, 1);
  };
}

MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    })
    .then(function (result) {
      // process result and only filter items that are searched
    var foundItems = result.data.menu_items.filter(function (item) {
      return item.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
    }, service);

    // return filtered items
    return foundItems;
  });

  service.removeItem = function (itemIndex) {

  };
};
}

})();
*/

//Following is the minified version of above code
!function(){"use strict";function e(e){var t=this;t.searchTerm="",t.found=[],t.searchMenu=function(){t.searchTerm?e.getMatchedMenuItems(t.searchTerm).then(function(e){t.found=e}).catch(function(e){console.log("Something went terribly wrong.")}):t.found=[]},t.removeItem=function(e){t.found.splice(e,1)}}function t(e,t){var n=this;n.getMatchedMenuItems=function(r){return e({method:"GET",url:t+"/menu_items.json"}).then(function(e){return e.data.menu_items.filter(function(e){return-1!==e.description.toLowerCase().indexOf(r.toLowerCase())},n)})}}angular.module("NarrowItDownApp",[]).controller("NarrowItDownController",e).service("MenuSearchService",t).directive("foundItems",function(){return{restrict:"E",templateUrl:"itemsFound.html",scope:{foundItems:"<",onRemove:"&"}}}).constant("ApiBasePath","https://davids-restaurant.herokuapp.com"),e.$inject=["MenuSearchService"],t.$inject=["$http","ApiBasePath"]}();