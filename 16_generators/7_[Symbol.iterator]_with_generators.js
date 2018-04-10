// Compare this script to 6_ scrit.
// Use [Symbol.iterator]

const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill',
    [Symbol.iterator]: function*() {
        yield this.lead;
        yield this.tester;
    }
};

const engineeringTeam = {
    testingTeam,
    size: 3,
    department: "Engineering",
    lead: "Adelia",
    manager: "Ziema",
    engineer: "Salehin",
    [Symbol.iterator]: function*() {
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        yield* this.testingTeam;
    }

};

const names = [];
for (let name of engineeringTeam) {
    names.push(name);
    console.log(names);
}
console.log(names);