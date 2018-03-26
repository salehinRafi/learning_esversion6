var users = [
    { name: 'Bill' },
    { name: 'Joe' },
    { name: 'Ulala' }
];

// ES5
var user;
for (var i = 0; i < users.length; i++) {
    if (users[i].name === 'Joe') {
        user = users[i];
        break;
    }
}
console.log(user);

// ES6
var findUser = users.find(function(user) {
    return user.name === "Ulala";
});

console.log(findUser);