/**
 * Example 1
 */

// ES5
function getEs5() {
    const year = new Date().getFullYear();
    return "The year is " + year;
}
console.log(getEs5());

// ES6
function getEs6() {
    const year = new Date().getFullYear();
    return `The year is ${year}`;
}
console.log(getEs6());

/**
 * Example 2
 */

const device_id = 4;
const guid = 20;
const username = "lola";

//ES5
const es5 = '{"device_id":"' + device_id + '","guid":"' + guid + '","username":"' + username + '"}';
console.log(es5);

//ES6
const es6 = `{"device_id":"${device_id}","guid":"${guid}","username":"${username}"}`;
console.log(es6);