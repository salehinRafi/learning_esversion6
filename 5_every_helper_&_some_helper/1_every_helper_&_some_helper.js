var computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32 }
];

// ES5
var allComputerCanRunProgram = true;
var onlySomeComputerCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
    var computer = computers[i];
    if (computer.ram < 16) {
        allComputerCanRunProgram = false;
    } else {
        onlySomeComputerCanRunProgram = true;
    }
}
console.log(allComputerCanRunProgram);
console.log(onlySomeComputerCanRunProgram);


// ES6
// AND or && Operaor
var andOperatorCheck = computers.every(function(computer) {
    return computer.ram > 16;
});
console.log(andOperatorCheck);

// OR or || Operaor
var orOperatorCheck = computers.some(function(computer) {
    return computer.ram > 16;
});
console.log(orOperatorCheck);