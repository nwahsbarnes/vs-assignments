const readline = require('readline-sync');

const alphabetBounds = [97, 122];

/**
 * Shifts the provided character n spaces if it is an alphabet character.
 * @param {*} char 
 * @param {*} n 
 * @returns the lowercase version of the given char shifted n spaces, otherwise the given char.
 */
function shiftChar(char, n) {
    const charCode = char.toLowerCase().charCodeAt();
    if (charCode < alphabetBounds[0] || charCode > alphabetBounds[1]) {
        return char;
    }
    return String.fromCharCode(charCode + n);
}

function shiftString(string, n) {
    return string.split("").map(char => shiftChar(char, n)).join("");
}

let input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
let shift = parseInt(readline.question('How many letters would you like to shift? '));

console.log(shiftString(input, shift));