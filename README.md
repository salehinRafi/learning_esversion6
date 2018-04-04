# Summary
The main goal for the `ES6` project was to fix some of JavaScript’s gotchas and add a whole bunch of functionality that we find in other popular programming languages that have been long missing in JavaScript.
## Array Helper

##### 1. forEach
> `forEach` accept a function iterator that `loop through each item` in an array.
##### 2. map
> `map` will loop through each item of array, `same like forEach but map returns the value of the array`.
#### 3. filter 
> `filter` return array `based on the boolean of the comparison`.
#### 4. find
> `find` will return the record `if a particular element is found` in the array.
#### 5. every
> `every` accept an iterator function that `will return true or false` where using AND operator. (`&&`)
#### 6. some
> `some` accept an iterator function that `will return true or false` where using OR operator. (`||`)
#### 7. reduce
> `reduce` takes `two arguments`, the `first argument is the iterator function`, and `the second argument is the initial value`.


## Variable Declarations
ES6 provides two new ways of declaring variables: let and const, which mostly replace the ES5 way of declaring variables, var.

#### 1. const
> ***i.*** Use for variables you want to be `immutable`.
> ***ii.*** Variable you declare must be immediately initialized.
#### 2. let
> ***i.*** Use for variables you want to be `mutable`.

Variable it declares is `block-scoped`, – they only exist within the innermost block that surrounds them.

## Template String
They introduce a way to define strings with domain-specific languages (DSLs), bringing better:
* String interpolation.
* Embedded expressions.
* Multiline strings without hacks.
* String formatting.
* String tagging for safe HTML escaping, localisation and more.

#### 1. String Substitution
> `Substitution` allows us to take any valid JavaScript expression.
Template Strings can contain placeholders for string substitution using the `${ } syntax`.

## Arrow Functions
Arrow functions are more or less a `shorthand form of anonymous function expressions that already exist` in JavaScript.
## Object Literal
Object literals make it easy to quickly create objects with properties inside the curly braces.

#### 1. Shorthand for Initializing Properties
If Key-Value pair where `Key` & `Value` is identical, we can condense as one.
> ***Before***
    `inventory: inventory`

> ***After***
    `inventory`
    
#### 2. Shorthand for Writing Methods
If Key-Value pair where `Value` is `function`, we can omit the `function keyword and  colon (:)`

> ***Before***
    `priceForTitle: function(title){ }`
    
> ***After***
    `priceForTitle(title){ }`
    
## Default Function Argument
Default function parameters `allow formal parameters to be initialized with default values` if no value or undefined is passed.
## Rest & Spread

#### 1. Rest
> ***i.*** `Capture/gather` a list of arguments `into a single array`.
> ***ii.*** Indicated by three dots `...<argumentName>`.
> ***iii.*** Restriction: no other named arguments can follow in the function declaration.

#### 2. Spread
>`Flatten` or combine the different arrays into a single array.

## Destructuring
Destructuring is a convenient `way of extracting multiple values from data stored` in :
* (possibly nested) objects 
* and Arrays.
## Make sure    
1. No mutable data
[Promise](https://scotch.io/amp/tutorials/javascript-promises-for-dummies)

*In a Progress*