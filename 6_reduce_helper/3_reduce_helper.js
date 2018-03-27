/** 
 * If this parenthese balance?
 * "()()()()" //yes
 * "(((())))" //yes
 * "))))" //No
 * "()))" //No
 * 1. Convert string to array because reduce is array helper.
 * 2. Set initial value of previous = 0
 * 3. If encounter "(" will increase previous value by 1, meanwhile if encounter ")" will reduce previous value by 1
 * 4. return true or false
 **/

function balancedParents(string) {
    return !string.split("").reduce(function(previous, char) {
        if (previous < 0) {
            return previous;
        }
        if (char === "(") {
            return ++previous
        }
        if (char === ")") {
            return --previous;
        }
        return previous;
    }, 0);
}
var checkBalance = balancedParents(")(");
console.log(checkBalance);