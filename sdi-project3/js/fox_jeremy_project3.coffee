# Deliverable 3
# Author: Jeremy Fox
# Created For: SDI Online
# Implementation of the Project 3 flowchart

# Cach JSON Object Properties As Variables
toysRUs     = @json.Stores[0].storeName # String
target      = @json.Stores[1].storeName # String
walmart     = @json.Stores[2].storeName # String
disneyStore = @json.Stores[3].storeName # String

#functions
print = (param) ->
  console.log(param)

boolean = (booleanArgument) ->
  v = "Boolean Function Store = " + booleanArgument
  return v
  
array = (arrayArgument) ->
  v = "Array Function Store = " + arrayArgument
  return v
  
number = (numberArgument) ->
  v = "Number Function Store = " + numberArgument
  return v
  
string = (stringArgument) ->
  v = "String Function Store = " + stringArgument
  return v
  
object = (objectArgument) ->
  v = "Object Function Store = " + objectArgument
  return v

# Story and function calls with console ouput
print(boolean(toysRUs))
print(array(target))
print(number(walmart))
print(string(disneyStore))
print(object(toysRUs))