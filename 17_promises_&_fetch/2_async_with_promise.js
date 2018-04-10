let promise = new Promise((resolve, reject) => {
    var request = new XMLHttpRequest();
    // make request
    request.onload = () => {
        //.. here we we code
        resolve();
    };
});

promise
    .then(() => {
        console.log('finally finnished with resolved status'); // on line so we shorten it
    })
    .then(() => console.log('I also ran'))
    .catch(() => console.log('Problem occur with rejected status'));