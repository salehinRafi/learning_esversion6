function addNumbers(numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}

// Pass an Array
console.log(addNumbers([1, 2, 3, 4, 5]));

// Will Produce an Error
//console.log(addNumbers(1, 2, 3, 4, 5));


// Rest : to capture/gather a list of arguments into a single array
// Rest operator : ...<argument>
function addNumbersByRest(...numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}

// Pass multiple argument
console.log(addNumbersByRest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));