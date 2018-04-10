function* colors() {
    yield 'red';
    yield 'blue';
    yield 'green';
}

const gen = colors();

console.log(gen.next()); // { value: 'red', done: false }
console.log(gen.next()); //{ value: 'blue', done: false }
console.log(gen.next()); //{ value: 'green', done: false }
console.log(gen.next()); //{ value: undefined, done: true }

const myColors = [];
for (let color of colors()) {
    myColors.push(color);
    console.log(myColors);
}
console.log(myColors);