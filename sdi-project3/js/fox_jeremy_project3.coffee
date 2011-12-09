# Deliverable 3
# Author: Jeremy Fox
# Created For: SDI Online
# Implementation of the Project 3 flowchart

# Cache JSON Object Properties As Variables
toysRUs         = @json.Stores[0].storeName   # String
target          = @json.Stores[1].storeName   # String
walmart         = @json.Stores[2].storeName   # String
disneyStore     = @json.Stores[3].storeName   # String
targetToys      = @json.Stores[1].toys        # Array
totalTargetToys = @json.Stores[1].toys.length # int
totalStores     = @json.Stores.length         # int
@ourBudget      = @json.ourBudget             # int
ourChoice       = @json.ourChoice             # boolean

# variables
event           = ""                          # String - used for event output


# Getter / Accessor
getEvent = ->
  return @event;

# Setter / Mutator
setEvent = (setThis) ->
  @event = setThis;
  return

# function to print to console
print = (param) ->
  console.log(param)
  return

# Boolean function
firstBlackFridayShopping = (itIsBlackFriday) ->
  if(itIsBlackFriday)
    setEvent("My wife, Courtney, and I went on our first ever \"black friday\" shopping spree this past Friday.")
    v = getEvent()
  else
    setEvent("My wife, Courtney, and I did not go on our first ever \"black friday\" shopping spree this past Friday.")
    v = getEvent()
  return v

# String function
ohTheHorror = (blackFriday, stores) ->
  if (blackFriday != null and stores != null)
    v = "We had heard all kinds of horror stories, from friends and family, about how crazy it is to try and shop on #{blackFriday}, but we decided to brave the crowds anyway. We knew it was going to be busy anywhere we decided to try and shop, but we decided to go to #{stores} different places."
  else
    v = "We had heard all kinds of horror stories, from friends and family, about how crazy it is to try and shop on #{blackFriday}, so we decided to not go shopping."
  return v

# Object function
stores = (object) ->
  @object = object.Stores
  @s = ""
  @t = ""
  # Nested Conditional and Nested Loop
  if(@object.length == 4)
    if(@object[0].storeName == "Toys R Us")
      for store in @object
        @s = @s + store.storeName + ", "
        for toy in store.toys
          @t = @t + toy + ", "
    else
      v = "We were not able to get to Toys R Us. It was just to busy."
  else
    v = "We were not able to get to any stores. It was just to busy."
  v = "We went to #{s} and we looked at a bunch of toys including #{t}. Yes, all of these stores were very busy, but we were able to get some really good deals on toys for our children."
  return v
  
# Array function
targetToyOptions = (target, targetToys) ->
  @tt = ""
  i = 0
  while i < targetToys.length
    @tt = @tt + targetToys[i] + ", "
    i++
  v = "What we found to be the hardest part of the entire venture, was trying to decide what toys to buy. For example, at #{target} we had #{targetToys.length} options. We could get a #{tt}"
  return v
  
# Number function
number = (int, toys) ->
  budget = "$"+@ourBudget
  @choice = ""
  leftOver = toys.length - 1
  for toy in toys
    if toy == "Rock Star Mickey"
      @choice = toy
  v = "We liked all of them, but had to make a choice. We chose the #{choice} because we thought our 2 year old would use this more than any of the other #{leftOver} choices. Overall, it was a great experience and we were able to get about $450 worth of merchandise for only $260 with a budget of #{budget}"
  return v

# Method on toysForDaddy Object
someToysForDaddy = (toy, anotherToy) ->
  return "By the way, Daddy wants an #{toy} and a #{anotherToy} for christmas! Hint hint."

# Object
toysForDaddy = 
  "toys1" : someToysForDaddy("Flat Screen TV", "Blu-Ray Player")
  "toys2" : someToysForDaddy("XBOX 360", "Recliner")
  
daddiesToys = (dadsToys) ->
  v = dadsToys.toys2
  return v

print(firstBlackFridayShopping(ourChoice))
print(ohTheHorror("the day after thanksgiving", totalStores))
print(stores(@json))
print(targetToyOptions(target, targetToys))
print(number(totalTargetToys, targetToys))
print(daddiesToys(toysForDaddy))
