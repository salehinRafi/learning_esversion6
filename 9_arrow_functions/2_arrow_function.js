/**
 * More Feature on Arror Function
 */

// 1 arg optional to have parentheses
const double = number => 2 * number;
console.log(double(3));
// or
const double1 = (number => 2 * number);
console.log(double1(3));

// More than 1 arg need parentheses
const multi = (number1, number2) => number1 * number2;
console.log(multi(3, 5));

// No Argument must have parentheses
const noArg = () => 3 * 3;
console.log(noArg());

// In Array
const numbers = [1, 2, 3];
let check = numbers.map(number => 2 * number);
console.log(check);