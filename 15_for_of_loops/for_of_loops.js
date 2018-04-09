const colors = ['red', 'green', 'blue'];

// ES5
for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}


// ES6
for (let color of colors) {
    console.log(color);
}