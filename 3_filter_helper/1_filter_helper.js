var products = [
    { name: 'cucumber', type: 'vegetable' },
    { name: 'apple', type: 'fruit' },
    { name: 'celery', type: 'vegetable' },
    { name: 'durian', type: 'fruit' },
];

// ES5
var filterProducts = [];
for (var i = 0; i < products.length; i++) {
    if (products[i].type === 'fruit') {
        filterProducts.push(products[i]);
    }
}
console.log(filterProducts);

// ES6
var productFilter = products.filter(function(product) {
    return product.type === 'vegetable';
});

console.log(productFilter);