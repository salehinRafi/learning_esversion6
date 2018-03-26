var cars = [
    { model: 'Perodua', price: 'CHEAP' },
    { model: 'Proton', price: 'EXPENSIVE' }
];

var prices = cars.map(function(car) {
    return car.price;
});

console.log(prices);