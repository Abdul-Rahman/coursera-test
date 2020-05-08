// The following code is commented because it's not minified.
/*(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
//.controller('ShoppingListAddController', ShoppingListAddController)
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var showList = this;
  showList.items = ShoppingListCheckOffService.getItems();
  showList.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };

  showList.moveItem = function (itemIndex) {
    try {
      ShoppingListCheckOffService.moveItem(itemIndex);
    } catch (error) {
      showList.errorMessage = error.message;
    }
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var showList2 = this;
  showList2.items2 = ShoppingListCheckOffService.getItems2();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items2 = [];

  var items = [
  { name: "cookies", quantity: 10},
  {name: "softdrink", quantity: 5},
  {name: "water", quantity: 20},
  {name: "pizza", quantity: 3},
  {name: "bread", quantity: 15}
];

  service.moveItem = function (items1Index) {
    var new_item = {
      name: items[items1Index].name,
      quantity: items[items1Index].quantity
    };
    items2.push(new_item);  
    items.splice(items1Index, 1);

    if (items.length == 0){
      //console.log("Everything is bought!");
      throw new Error("Everything is bought!");
    }

  };
  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };
  service.getItems = function () {
    return items;
  };
  service.getItems2 = function () {
    return items2;
  };
}

})();
*/

//Following is the minified version of above code
!function(){"use strict";function t(t){var e=this;e.items=t.getItems(),e.removeItem=function(e){t.removeItem(e)},e.moveItem=function(n){try{t.moveItem(n)}catch(t){e.errorMessage=t.message}}}function e(t){this.items2=t.getItems2()}angular.module("ShoppingListCheckOff",[]).controller("ToBuyController",t).controller("AlreadyBoughtController",e).service("ShoppingListCheckOffService",function(){var t=[],e=[{name:"cookies",quantity:10},{name:"softdrink",quantity:5},{name:"water",quantity:20},{name:"pizza",quantity:3},{name:"bread",quantity:15}];this.moveItem=function(n){var i={name:e[n].name,quantity:e[n].quantity};if(t.push(i),e.splice(n,1),0==e.length)throw new Error("Everything is bought!")},this.removeItem=function(t){e.splice(t,1)},this.getItems=function(){return e},this.getItems2=function(){return t}}),t.$inject=["ShoppingListCheckOffService"],e.$inject=["ShoppingListCheckOffService"]}();