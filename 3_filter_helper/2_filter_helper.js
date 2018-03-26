var products = [
    { name: 'cucumber', type: 'vegetable', quantity: 1, price: 1 },
    { name: 'apple', type: 'fruit', quantity: 10, price: 2 },
    { name: 'celery', type: 'vegetable', quantity: 22, price: 10 },
    { name: 'durian', type: 'fruit', quantity: 22, price: 2 },
];

// Type is 'vegetable', quantity  is greater than 0, price is less than 10
var productFilter = products.filter(function(product) {
    return product.type === 'vegetable' && product.quantity > 0 && product.price < 10;
});

console.log(productFilter);