/**
 * When to use Fat Arrow Functions
 */

// Original
const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function() {
        return this.members.map((member) => {
            // this === team
            //return `${member} is on team ${this.teamName}`; //this
            return `${member} is on team ${team.teamName}`; //team
        });
    }
}

console.log(team.teamSummary());

//federal function?