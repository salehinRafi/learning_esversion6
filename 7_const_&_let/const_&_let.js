// ES5
var name_ = "Salehin Rafi";
var title_ = "Software Engineer";
var hourlyWage_ = 50;
console.log(name_, title_, hourlyWage_);

// ES6
// Ask ourselve a question `Do i expect this value need to be changed?`

const name = "Salehin Rafi"; // Name of person is immutable
let title = "Software Engineer"; // title can be change over time
let hourlyWage = 50; // Wage can be increase or decrease
console.log(name, title, hourlyWage);

// some time later, we expect changes on...

title = "Senior Software Engineer";
hourlyWage = 100;
console.log(name, title, hourlyWage);

// Another Example
function count(targetString) {
    const characters = ['a', 'e', 'i', 'o', 'u'];
    let number = 0;

    for (var i = 0; i < targetString.length; i++) {
        if (characters.includes(targetString[i])) {
            number++;
        }
    }
    return number;
}

console.log(count("djnucweqetqrqydiwoaxdm"));

/**
 * What `const` and `let` solve.
 * 1. Code much easier to read
 */