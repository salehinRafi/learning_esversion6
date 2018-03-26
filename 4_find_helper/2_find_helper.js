// Example 1

function Car(model) {
    this.model = model;
}

var cars = [
    new Car('Proton'),
    new Car('Naza'),
    new Car('Perodua')
];

var findCar = cars.find(function(car) {
    return car.model === 'Perodua';
});

console.log(findCar);

// Example 2
var posts = [
    { id: 1, title: 'New post' },
    { id: 2, title: 'Old post' }
];

var comment = { postId: 1, content: 'Great post' };

function postForComment(posts, comment) {
    return posts.find(function(post) {
        return post.id === comment.postId;
    });
}

console.log(postForComment(posts, comment));