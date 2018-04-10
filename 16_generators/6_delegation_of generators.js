// How to combibne multiple generator together
// Use generator delegations.

const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill'
};

const engineering = {
    testingTeam,
    size: 3,
    department: "Engineering",
    lead: "Adelia",
    manager: "Ziema",
    engineer: "Salehin",

};



//Aim: iterate through employee only with different generator

function* TeamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;

    const testingTeamIterator = TestingTeamIterator(team.testingTeam);
    // Use delegation generator
    yield* testingTeamIterator;
}

// Separate for much more reusable code
function* TestingTeamIterator(team) {
    yield team.lead;
    yield team.tester;
}

const names = [];
for (let name of TeamIterator(engineering)) {
    names.push(name);
    console.log(names);
}
console.log(names);