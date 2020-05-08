(function () {
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

    /*console.log("items1Index = " + items1Index);
    console.log("items[items1Index].name = " + items[items1Index].name);
    console.log("items[items1Index].quantity = " + items[items1Index].quantity);*/
    var new_item = {
      name: items[items1Index].name,
      quantity: items[items1Index].quantity
    };
    items2.push(new_item);  
    items.splice(items1Index, 1);
/*    console.log("items2[0].name =" + items2[0].name);
    console.log("items2[0].quantity =" + items2[0].quantity);
    console.log("items2[1].name =" + items2[1].name);
    console.log("items2[1].quantity =" + items2[1].quantity);
    console.log("items2[2].name =" + items2[2].name);
    console.log("items2[2].quantity =" + items2[2].quantity);*/

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
