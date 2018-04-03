// ES5 
function es5(url, method) {

    if (!method) {
        method = 'GET';
    }
    // logic to make the request
    return method;
}
console.log(es5('google.com'));
console.log(es5('google.com', 'POST'));

// ES6
function es6(url, method = 'GET') {
    // logic to make the request
    return method;
}

console.log(es6('google.com'));
console.log(es6('google.com', 'POST'));