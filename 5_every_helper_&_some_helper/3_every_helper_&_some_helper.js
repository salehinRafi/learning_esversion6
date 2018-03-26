function Field(value) {
    this.value = value;
}

Field.prototype.validate = function() {
    return this.value.length > 0;
};

var username = new Field("my_username");
var password = new Field("my_password");
var birthdate = new Field("");

// ES5
console.log(username.validate() && birthdate.validate() && birthdate.validate()); // AND Operator
console.log(username.validate() || birthdate.validate() || birthdate.validate()); // OR Operator
// ES6
var fields = [username, password, birthdate];

var everyField = fields.every(function(field) { // AND Operator
    return field.validate();
});
console.log(everyField);

var someField = fields.some(function(field) { // OR Operator
    return field.validate();
});
console.log(someField);



// Practice in form
if (everyField) {
    // Form is valid
} else {
    // Show an error
}