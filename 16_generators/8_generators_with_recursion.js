// Array helper map & each doesn't work with generator

class Comment {
    constructor(content, children) {
        this.content = content;
        this.children = children;
    }

    *
    [Symbol.iterator]() {
        yield this.content;
        for (let child of this.children) {
            yield* child;
        }
    }
}

const children = [
    new Comment('good comment', []),
    new Comment('bad comment', []),
    new Comment('meh', [])
];

const tree = new Comment('Great Post!', children);
console.log(tree);

const values = [];
for (let value of tree) {
    values.push(value);
}

console.log(values);