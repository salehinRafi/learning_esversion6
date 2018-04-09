// What is generator?
// A generator is a function that can be entered and exhibit multiple times.



// generator function : function*
function* numbers() {
    yield;
}

const gen = numbers();
console.log(gen.next()); // { value: undefined, done: false }
console.log(gen.next()); //{ value: undefined, done: true }
console.log(gen.next()); //{ value: undefined, done: true }