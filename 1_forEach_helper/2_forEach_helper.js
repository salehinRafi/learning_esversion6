var numbers = [1, 2, 3, 4, 5];

var sum1 = 0;
var sum2 = 0;

// Loop over the array, incrementing the sum value
// Example 1
numbers.forEach(function(number) {
    sum1 += number;
});
console.log(sum1);

//Example 2
// By separate the function
function adder(number) {
    sum2 += number;
}
numbers.forEach(adder);
console.log(sum2);