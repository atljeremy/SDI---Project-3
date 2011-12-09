(function() {
  var daddiesToys, disneyStore, event, firstBlackFridayShopping, getEvent, number, ohTheHorror, ourChoice, print, setEvent, someToysForDaddy, stores, target, targetToyOptions, targetToys, totalStores, totalTargetToys, toysForDaddy, toysRUs, walmart;
  toysRUs = this.json.Stores[0].storeName;
  target = this.json.Stores[1].storeName;
  walmart = this.json.Stores[2].storeName;
  disneyStore = this.json.Stores[3].storeName;
  targetToys = this.json.Stores[1].toys;
  totalTargetToys = this.json.Stores[1].toys.length;
  totalStores = this.json.Stores.length;
  this.ourBudget = this.json.ourBudget;
  ourChoice = this.json.ourChoice;
  event = "";
  getEvent = function() {
    return this.event;
  };
  setEvent = function(setThis) {
    this.event = setThis;
  };
  print = function(param) {
    console.log(param);
  };
  firstBlackFridayShopping = function(itIsBlackFriday) {
    var v;
    if (itIsBlackFriday) {
      setEvent("My wife, Courtney, and I went on our first ever \"black friday\" shopping spree this past Friday.");
      v = getEvent();
    } else {
      setEvent("My wife, Courtney, and I did not go on our first ever \"black friday\" shopping spree this past Friday.");
      v = getEvent();
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
    this.tt = "";
    i = 0;
    while (i < targetToys.length) {
      this.tt = this.tt + targetToys[i] + ", ";
      i++;
    }
    v = "What we found to be the hardest part of the entire venture, was trying to decide what toys to buy. For example, at " + target + " we had " + targetToys.length + " options. We could get a " + tt;
    return v;
  };
  number = function(int, toys) {
    var budget, leftOver, toy, v, _i, _len;
    budget = "$" + this.ourBudget;
    this.choice = "";
    leftOver = toys.length - 1;
    for (_i = 0, _len = toys.length; _i < _len; _i++) {
      toy = toys[_i];
      if (toy === "Rock Star Mickey") {
        this.choice = toy;
      }
    }
    v = "We liked all of them, but had to make a choice. We chose the " + choice + " because we thought our 2 year old would use this more than any of the other " + leftOver + " choices. Overall, it was a great experience and we were able to get about $450 worth of merchandise for only $260 with a budget of " + budget;
    return v;
  };
  someToysForDaddy = function(toy, anotherToy) {
    return "By the way, Daddy wants an " + toy + " and a " + anotherToy + " for christmas! Hint hint.";
  };
  toysForDaddy = {
    "toys1": someToysForDaddy("Flat Screen TV", "Blu-Ray Player"),
    "toys2": someToysForDaddy("XBOX 360", "Recliner")
  };
  daddiesToys = function(dadsToys) {
    var v;
    v = dadsToys.toys2;
    return v;
  };
  print(firstBlackFridayShopping(ourChoice));
  print(ohTheHorror("the day after thanksgiving", totalStores));
  print(stores(this.json));
  print(targetToyOptions(target, targetToys));
  print(number(totalTargetToys, targetToys));
  print(daddiesToys(toysForDaddy));
}).call(this);
