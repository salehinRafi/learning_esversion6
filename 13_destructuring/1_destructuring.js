var expense = {
    type: 'Business',
    amount: '$45 RM'
};

// ES5
//var type = expense.type;
//var amount = expense.amount;

// ES6
const { type, amount } = expense;

console.log(type);
console.log(amount);