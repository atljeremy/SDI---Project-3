(function() {
  var disneyStore, doNothing, firstBlackFridayShopping, number, ohTheHorror, print, stores, target, targetToyOptions, targetToys, totalStores, toysRUs, walmart, _i, _len, _ref;
  toysRUs = this.json.Stores[0].storeName;
  target = this.json.Stores[1].storeName;
  walmart = this.json.Stores[2].storeName;
  disneyStore = this.json.Stores[3].storeName;
  targetToys = this.json.Stores[1].toys;
  totalStores = this.json.Stores.length;
  this.goingShopping = "My wife, Courtney, and I went on our first ever \"black friday\" shopping spree this past Friday.";
  print = function(param) {
    return console.log(param);
  };
  number = function(numberArgument) {
    var v;
    v = "Total Available Stores = " + numberArgument;
    return v;
  };
  firstBlackFridayShopping = function(itIsBlackFriday) {
    var v;
    if (itIsBlackFriday) {
      v = this.goingShopping;
    } else {
      v = "My wife, Courtney, and I did not go on our first ever \"black friday\" shopping spree this past Friday.";
    }
    return v;
  };
  ohTheHorror = function(blackFriday, stores) {
    var v;
    if (blackFriday !== null && stores !== null) {
      v = "We had heard all kinds of horror stories, from friends and family, about how crazy it is to try and shop on " + blackFriday + ", but we decided to brave the crowds anyway. We knew it was going to be busy anywhere we decided to try and shop, but we decided to go to " + stores + " different places.";
    } else {
      v = "We had heard all kinds of horror stories, from friends and family, about how crazy it is to try and shop on " + blackFriday + ", so we decided to not go shopping.";
    }
    return v;
  };
  stores = function(object) {
    var store, toy, v, _i, _j, _len, _len2, _ref, _ref2;
    this.object = object.Stores;
    this.s = "";
    this.t = "";
    if (this.object.length === 4) {
      if (this.object[0].storeName === "Toys R Us") {
        _ref = this.object;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          store = _ref[_i];
          this.s = this.s + store.storeName + ", ";
          _ref2 = store.toys;
          for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
            toy = _ref2[_j];
            this.t = this.t + toy + ", ";
          }
        }
      } else {
        v = "We were not able to get to Toys R Us. It was just to busy.";
      }
    } else {
      v = "We were not able to get to any stores. It was just to busy.";
    }
    v = "We went to " + s + " and we looked at a bunch of toys including " + t + ". Yes, all of these stores were very busy, but we were able to get some really good deals on toys for our children.";
    return v;
  };
  targetToyOptions = function(target, targetToys) {
    var i, v;
    this.t = "";
    i = 0;
    while (i < targetToys.length) {
      this.t = this.t + targetToys[i] + ", ";
      i++;
    }
    v = "What we found to be the hardest part of the entire venture, was trying to decide what toys to buy. For example, at " + target + " we had " + targetToys.length + " options. We could get a " + t;
    return v;
  };
  _ref = this.json.Stores;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    doNothing = _ref[_i];
    doNothing;
  }
  print(number(totalStores));
  print(firstBlackFridayShopping(true));
  print(ohTheHorror("the day after thanksgiving", totalStores));
  print(stores(this.json));
  print(targetToyOptions(target, targetToys));
}).call(this);
