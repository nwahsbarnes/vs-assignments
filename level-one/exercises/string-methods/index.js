
// Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.
function capitalizeAndLowercase(string) {
    return string.toUpperCase().concat(string.toLowerCase());
}
console.log(capitalizeAndLowercase("HelLO"));

// Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.
// > Hint: You'll need to use Math.floor().
function findMiddleIndex(string) {
    return Math.floor(string.length / 2);
}
console.log(findMiddleIndex("should be"))

// Write a function that uses slice() and the other functions you've written to return the first half of the given string.
function returnFirstHalf(string) {
    return string.slice(0, findMiddleIndex(string));
}
console.log("first half of donuts: " + returnFirstHalf("donuts"));

// Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.
// > Hint: If your string length is odd, use Math.floor() to round down.
function capitalizeAndLowercase2(string) {
    let middleIndex = findMiddleIndex(string);
    let firstHalf = string.substring(0, middleIndex).toUpperCase();
    let secondHalf = string.substring(middleIndex).toLowerCase();
    return firstHalf + secondHalf;
}
console.log(capitalizeAndLowercase2("helloworldaa"));

// > (This one is a step up in difficulty and utilizes the .split() string method and .join() array method):
// Write a function that takes a string as a parameter and capitalizes any character that follows a space.

function capitalizeAfterSpaces(string) {
    let words = string.split(" ");
    let capitalized = [];
    for (let word of words) {
        let wordChars = word.split("");
        if (wordChars.length >= 1) {
            wordChars[0] = wordChars[0].toUpperCase();
        }
        capitalized.push(wordChars.join(""));
    }
    return capitalized.join(" ");
}
console.log(capitalizeAfterSpaces("asdf bffdsa there is a whole world out there"));