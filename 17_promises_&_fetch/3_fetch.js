url = "https://jsonplaceholder.typicode.com/posts/";
url1 = "https://jsonplaceholder.typicode.com/postssddad343414/";

// issues:
// When make request, the response doesn't change the data to what we expect.
fetch(url)
    .then(response => response.json()) // to get the access to the data we request we need to convert to json
    .then(data => console.log(data)) // then we can access the data.
    .catch(error => console.log('BAD', error));


/**
 * Shor Coming with Fetch
 * 1. Any error status code above 300, it does not enter catch block.  
 */
fetch(url1)
    .then(response => console.log(response))
    .catch(error => console.log('BAD', error));