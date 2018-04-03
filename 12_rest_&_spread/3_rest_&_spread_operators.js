/**
 * Example 1
 */
function validateShoppingList(...items) { // Rest Operator

    if (items.indexOf('milk') < 0) {
        return ['milk', ...items]; // Spread Operator
    }
    return items;

}

console.log(validateShoppingList('oranges', 'bread'));

/**
 * Example 2
 */
const MathLibrary = {
    calculateProduct(...rest) {
        console.log("Please use the multiply method isntead")
        return this.multiply(...rest)
    },
    multiply(a, b) {
        return a * b;
    }
};