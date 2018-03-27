// ES5
const es5 = function(a, b) {
    return a + b;
}
console.log(es5(1, 2));

// ES6
const es6 = (a, b) => {
    return a + b;
}
console.log(es6(3, 4));

// Easy way to deal with single expression.
const es6SingleExp = (a, b) => a + b; // implicit return
console.log(es6SingleExp(5, 6));