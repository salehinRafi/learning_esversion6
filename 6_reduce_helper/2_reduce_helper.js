var primaryColors = [
    { color: "red" },
    { color: "yellow" },
    { color: "blue" }
];

var color = primaryColors.reduce(function(previous, primaryColor) {
    previous.push(primaryColor.color);
    return previous;
}, []);

console.log(color);