/**
 * Example of story to understand how generator works
 * 
 * Situation: Leaving a house to buy some groceries in the store.
 * Storyboard: 
 * 1. Leaving a house.
 * 2. Walking in the sidewalk
 * 3. Get into the store with a cash/money in hand.
 * 4. But a groceries.
 * 5. Leave a store with a groceries in hand.
 * 6. Walking back home
 */


function* shopping() {
    /**
     * Stuff on the sidewalk.
     */

    // walking down the sidewalk

    // go into the store with the cash
    const stuffFromStore = yield 'cash'; //convert cash to groceries after .next('groceries') as final value.

    //walking back home
    return stuffFromStore;
}

/**
 * Stuff in the store
 */
const gen = shopping();

// leaving the house with cash in hands.
console.log(gen.next()); // {done: false } Did we manage buy a groceries?NO.

// walked into the store
// walking up and down the aisles..
// purchase groceries needed.
// leaving the store with groceries.
console.log(gen.next('groceries')); //{done: true } Did we manage buy a groceries?YES.