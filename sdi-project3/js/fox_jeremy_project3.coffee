# Deliverable 3
# Author: Jeremy Fox
# Created For: SDI Online
# Implementation of the Project 3 flowchart

# Cach JSON Object Properties As Variables
toysRUs     = @json.Stores[0].storeName # String
target      = @json.Stores[1].storeName # String
walmart     = @json.Stores[2].storeName # String
disneyStore = @json.Stores[3].storeName # String
totalStores = @json.Stores.length

#functions
print = (param) ->
  console.log(param)

boolean = (booleanArgument) ->
  v = "Boolean Function Store = " + booleanArgument
  return v
  
array = (arrayArgument) ->
  # Conditional
  if(something == somethinElse){
    console.log("Inside conditional");
  }
  v = "Array Function Store = " + arrayArgument
  return v
  
number = (numberArgument) ->
  v = "Total Available Stores = " + numberArgument
  return v
  
string = (stringArgument) ->
  v = "String Function Store = " + stringArgument
  return v
  
object = (objectArgument) ->
  # Nested Conditional
  if(something == somethingElse){
    if(someone == someoneElse){
      console.log("Inside nested conditional");
    }
  }
  v = "Object Function Store = " + objectArgument
  return v
  
# Nested Loop
for doNothing in @json.Stores
  for storeIndex in @json.Stores
    console.log storeIndex

# For loop
doNothing for doNothing in @json.Stores

# While loop
console.log "Some String" while 10 < 20

# Story and functions with console ouput
print(boolean(toysRUs))
print(array(target))
print(number(totalStores))
print(string(disneyStore))
print(object(walmart))

# My wife, Courtney, and I went on our first ever "black friday" shopping spree this past Friday. We had heard all kinds of horror stories, from friend and family, about how crazy it is to try and shop on the day after thanksgiving, but we decided to brave the crowds anyway. We knew it was going to be busy anywhere we decided to try and shop, so we decided to go to a few different places. We went to toys-r-us, wal-mart, target, and the disney store in the mall. Yes, all of these stores were very busy, but we were able to get some really good deals on toys for our children. What we found to be the hardest part of the entire venture, was trying to decide what toys to buy. For example, at toys-r-us we had 3 options. We could get a kitchen set, bike, or art set. We liked all of them, but had to make a choice. We chose the kitchen set because we thought our 2 year old would use this more than any of the other 2 choices. Overall, it was a great experience and we were able to get about $450 worth of merchandise for only $260.