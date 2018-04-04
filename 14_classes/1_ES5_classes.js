/**
 * ES5 Classes
 */

// Constructor Function
function Car(options) {
    this.title = options.title;
}

// Method Function
Car.prototype.drive = function() {
    return 'Vroom';
}

// to inherited Class method
function Toyota(options) {
    Car.call(this, options); // intialize Car Class
    this.color = options.color
}
// To access Car drive() method from Toyota Object we need do
// 1. Create a duplicate Car prototype
Toyota.prototype = Object.create(Car.prototype);
// 2. Fixed back the constructor
Toyota.prototype.constructor = Toyota;


// Toyota prototype
Toyota.prototype.honk = function() {
    return 'Beep';
}

const toyota = new Toyota({ color: 'Pearl White', title: 'Perodua' });
console.log('Toyota Object:');
console.log(toyota);
console.log(toyota.drive()); // Access Car prototype drive() method thru Toyota Object.
console.log(toyota.honk()); // Access Toyota prototype honk() method