var post = { id: 4, title: 'New Post' };
var comments = [
    { postId: 4, content: 'aweome post' },
    { postId: 3, content: 'it was oke' },
    { postId: 4, content: 'neat' },
];

function commentsForPost(post, comments) {
    return comments.filter(function(comment) {
        return comment.postId === post.id;
    });
}

console.log(commentsForPost(post, comments));