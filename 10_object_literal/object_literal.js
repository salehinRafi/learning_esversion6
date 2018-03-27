/**
 * Thumb rule:
 * 1. If Key-Value pair where `Key` & `Value` is a same name, we can condense as one.
 *  Eg. inventory: inventory ----------> inventory
 * 
 * 2. If Key-Value pair where `Value` is function, we can omit the `function` keyword and `:`
 *  Eg. priceForTitle: function(title) ----------> priceForTitle(title)
 */
function createBookShop(inventory) {
    return {
        inventory,
        inventoryValue() {
            return this.inventory.reduce((total, book) => {
                    return total + book.price;
                }, 0)
                // or
                // return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle(title) {
            return this.inventory.find(book => book.title === title).price;
        }
    };
}

const inventory = [
    { title: 'Harry Potter', price: 10 },
    { title: 'Eloquent Javascript', price: 15 }
];
// Create Object
const bookShop = createBookShop(inventory);
// Get Value
console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Harry Potter'));