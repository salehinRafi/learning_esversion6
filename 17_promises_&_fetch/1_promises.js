// Promises

let promise = new Promise((resolve, reject) => {
    reject(); // Set PromiseStatus to rejected
    //resolve(); // Set PromiseStatus to resolved
});

promise
    .then(() => {
        console.log('promise: finally finnished with resolved status'); // on line so we shorten it
    })
    .then(() => console.log('promise: I also ran'))
    .catch(() => console.log('promise: Problem occur with rejected status'));


let promiseExample = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve();
        reject();
    }, 3000);
});
promiseExample
    .then(() => {
        console.log('promiseExample: finally finnished with resolved status'); // on line so we shorten it
    })
    .then(() => console.log('promiseExample: I also ran'))
    .catch(() => console.log('promiseExample: Problem occur with rejected status'));