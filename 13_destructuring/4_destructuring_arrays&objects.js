// Use destructing arrays and objects at the same time

/**
 * Example 1
 */

const companies = [
    { name: 'Google', location: 'Mountain View' },
    { name: 'Facebook', location: 'Menlo Park' },
    { name: 'Uber', location: 'San Francisco' }

];

// ES5
var locationEs5 = companies[0].location;
console.log(locationEs5);

// ES6

//let [location] = companies;
//console.log(location); // Get the entire object

let [{ location }] = companies;
console.log(location); // Get the location property of first object

/**
 * Example 2
 */

const Google = {
    locations: ['Mountain View', 'New York', 'Kuala Lumpur']
};

const { locations } = Google;
console.log(locations); // Get the entire array

const { locations: [location1, location2, location3] } = Google;
console.log(location1, location2, location3); // Get the entire array