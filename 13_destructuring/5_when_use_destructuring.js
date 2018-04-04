/**
 * Not best practice
 */

function signupOld(username, password, email, dateOfBirth, city) {
    //create new user
    console.log(username);
}
signupOld('myusername', 'mypassword', 'myemail@example.com', '1/1/2018', 'Kuala Lumpur');


/**
 * Best practice by applying Destructuring
 */

function signupNew({ username, password, email, dateOfBirth, city }) {
    //create new user
    console.log(username);
}
const user = {
    username: 'myusername',
    password: 'mypassword',
    email: 'myemail@example.com',
    dateOfBirth: '1/1/2018',
    city: 'Kuala Lumpur'
};
signupNew(user);



/**
 * Example 2
 */

// From This
const points = [
    [4, 5],
    [10, 1],
    [0, 40]
];

// To This Goal
/**
   [
    { x: 4, y: 5 },
    { x: 10, y: 1 },
    { x: 0, y: 40 } 
   ]
 */

// Destructure array in points.
let goal = points.map(([x, y]) => {
    return { x, y }; // because the variable is identical we can reduce the variable into one
})

console.log(goal);