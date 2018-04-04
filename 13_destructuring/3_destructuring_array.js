const companies = [
    'Google', 'Facebook', 'Uber'
];


// ES5
const firstCompany = companies[0];
console.log(firstCompany);

// ES6
const [name, name2, name3] = companies;
console.log(name, name2, name3);

const { length } = companies;
console.log(length);

const [nameComp, ...rest] = companies;
console.log(nameComp, rest);