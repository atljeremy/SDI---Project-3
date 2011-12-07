(function() {
  var array, boolean, disneyStore, number, object, print, string, target, toysRUs, walmart;
  toysRUs = this.json.Stores[0].storeName;
  target = this.json.Stores[1].storeName;
  walmart = this.json.Stores[2].storeName;
  disneyStore = this.json.Stores[3].storeName;
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
    v = "Number Function Store = " + numberArgument;
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
  print(number(walmart));
  print(string(disneyStore));
  print(object(toysRUs));
}).call(this);
