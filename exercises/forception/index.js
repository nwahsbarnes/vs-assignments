var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

let alphabetized = people.slice();

for (let name of people) {
    let indexOfName = alphabetized.indexOf(name) + 1;
    alphabetized.splice(indexOfName, 0, ...alphabet.split(""));
}

console.log(alphabetized);