var savedFile = {
    extension: 'jpeg',
    name: 'repost',
    size: 434202
};

// ES5 on how to use arguments object.
function fileSummary(file) {
    return `The file ${file.name}.${file.extension} is of size ${file.size}`;
}
console.log(fileSummary(savedFile));

// ES6 by destructuring argument object
function fileSummaryEs6({ name, extension, size }, { color }) {
    return `The ${color} file ${name}.${extension} is of size ${size}`;
}
console.log(fileSummaryEs6(savedFile, { color: 'red' }));