class Car { // to add method inside a class, use enhance object literal syntax

    // initialization of object
    constructor({ title }) { // use destructure to access title value
        this.title = title;
    }
    drive() {
        return 'vroom';
    }

}

const car = new Car({ title: 'Toyota' });
console.log(car);
console.log(car.drive()); //Access drive method


// extend class of Car where toyota will inherit/subclass car class
class Toyota extends Car {

    constructor(options) {
        // Must call super constructor in derived class before accessing 'this' or returning from derived constructor.
        super(options); // Car.constructor()
        this.color = options.color;
    }
    honk() {
        return 'beep';
    }
}

const toyota = new Toyota({ color: 'Pearl White', title: 'Toyota' });
console.log(toyota);
console.log(toyota.honk()); //Access toyota method