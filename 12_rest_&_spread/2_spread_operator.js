const defaultColor = ['red', 'green'];
const userfavoriteColors = ['orange', 'yellow'];

// Aim: Join Both Array

// ES5
let concatColor = defaultColor.concat(userfavoriteColors);
console.log(concatColor);

// ES6
// Much more easy to combine
let colorPallet = [...defaultColor, ...userfavoriteColors];
console.log(colorPallet); // [ 'red', 'green', 'orange', 'yellow' ]

let colPallet = [...defaultColor, userfavoriteColors];
console.log(colPallet); // [ 'red', 'green', [ 'orange', 'yellow' ] ]

let justAddNewValue = ['Hello', ...defaultColor, ...userfavoriteColors];
console.log(justAddNewValue); // [ 'Hello', 'red', 'green', 'orange', 'yellow' ]