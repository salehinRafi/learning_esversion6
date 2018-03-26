var numbers = [1, 2, 3];

// ES5
var doubleNumbers = [];
for (var i = 0; i < numbers.length; i++) {
    doubleNumbers.push(numbers[i] * 2);
}

console.log(doubleNumbers);

// ES6
var double = numbers.map(function(number) {
    return number * 2;
});
console.log(double);