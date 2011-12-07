(function() {
  var array, boolean, disneyStore, number, object, print, string, target, totalStores, toysRUs, walmart;
  toysRUs = this.json.Stores[0].storeName;
  target = this.json.Stores[1].storeName;
  walmart = this.json.Stores[2].storeName;
  disneyStore = this.json.Stores[3].storeName;
  totalStores = this.json.Stores.length;
  print = function(param) {
    return console.log(param);
  };
  boolean = function(booleanArgument) {
    var v;
    v = "Boolean Function Store = " + booleanArgument;
    return v;
  };
  array = function(arrayArgument) {
    var v;
    v = "Array Function Store = " + arrayArgument;
    return v;
  };
  number = function(numberArgument) {
    var v;
    v = "Total Available Stores = " + numberArgument;
    return v;
  };
  string = function(stringArgument) {
    var v;
    v = "String Function Store = " + stringArgument;
    return v;
  };
  object = function(objectArgument) {
    var v;
    v = "Object Function Store = " + objectArgument;
    return v;
  };
  print(boolean(toysRUs));
  print(array(target));
  print(number(totalStores));
  print(string(disneyStore));
  print(object(walmart));
}).call(this);
