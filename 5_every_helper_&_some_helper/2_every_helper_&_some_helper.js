var names = [
    "Alex",
    "Kiran",
    "Ah Choo"
];

var everyName = names.every(function(name) {
    return name.length > 4;
});
console.log(everyName);

var someName = names.some(function(name) {
    return name.length > 4;
});
console.log(someName);