const engineering = {
    size: 3,
    department: "Engineering",
    lead: "Adelia",
    manager: "Ziema",
    engineer: "Salehin"
};

//Aim: iterate through employee only

function* TeamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
}

const names = [];
for (let name of TeamIterator(engineering)) {
    names.push(name);
    console.log(names);
}
console.log(names);