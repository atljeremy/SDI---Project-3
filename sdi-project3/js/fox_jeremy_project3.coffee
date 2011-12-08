# Deliverable 3
# Author: Jeremy Fox
# Created For: SDI Online
# Implementation of the Project 3 flowchart

# Cache JSON Object Properties As Variables
toysRUs     = @json.Stores[0].storeName # String
target      = @json.Stores[1].storeName # String
walmart     = @json.Stores[2].storeName # String
disneyStore = @json.Stores[3].storeName # String
totalStores = @json.Stores.length

# variables
@goingShopping = "My wife, Courtney, and I went on our first ever \"black friday\" shopping spree this past Friday."

#functions
print = (param) ->
  console.log(param)

# Boolean function
firstBlackFridayShopping = (itIsBlackFriday) ->
  # Conditional
  if(itIsBlackFriday)
    v = @goingShopping
  else
    v = "My wife, Courtney, and I did not go on our first ever \"black friday\" shopping spree this past Friday."
  return v

# Array function
targetToyOptions = (arrayArgument) ->
  v = "What we found to be the hardest part of the entire venture, was trying to decide what toys to buy. For example, at toys-r-us we had 3 options. We could get a kitchen set, bike, or art set."
  return v

# Number function
number = (numberArgument) ->
  v = "Total Available Stores = " + numberArgument
  return v

# String function
ohTheHorror = (blackFriday, stores) ->
  if (blackFriday != null and stores != null)
    v = "We had heard all kinds of horror stories, from friends and family, about how crazy it is to try and shop on #{blackFriday}, but we decided to brave the crowds anyway. We knew it was going to be busy anywhere we decided to try and shop, but we decided to go to #{stores} different places.";
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

# For loop
doNothing for doNothing in @json.Stores

# While loop
i = 0
while i < 2
  console.log "Some String"
  i++

# functin needing implementation
print(targetToyOptions(target))
print(number(totalStores))

################### IMPLEMENTED FUNCTION #####################
print(firstBlackFridayShopping(true))
print(ohTheHorror("the day after thanksgiving", totalStores))
print(stores(@json))

#   We liked all of them, but had to make a choice. We chose the kitchen set because we thought our 2 year old would use this more than any of the other 2 choices. Overall, it was a great experience and we were able to get about $450 worth of merchandise for only $260.