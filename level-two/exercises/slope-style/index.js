// Task 1
// Use the Rest Operator to help this function return an array of animals,
// no matter how many animals are passed to it:
function collectAnimals(...animals) {
    return animals;
}
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]

// Task 2
// Write a function that returns a food object with the array names as properties.
// You'll use an ES6 shorthand syntax that becomes useful when a variable name is
// mentioned twice in both the name and value of properties in your object:
function combineFruit(fruit, sweets, vegetables) {
    return {
        fruit,
        sweets,
        vegetables
    }
}

console.log(combineFruit(["apple", "pear"],
    ["cake", "pie"],
    ["carrot"]));

// Task 3
// Use destructuring to use the property names as variables. Destructure the object in the parameter:
function parseSentence({ location, duration }) {
    return `We're going to have a good time in ${location} for ${duration}`
}

console.log(parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks"
}));

// Task 4
// Use array destructuring to make this code ES6:
function returnFirst(items) {
    const [firstItem] = items;
    return firstItem
}

console.log(returnFirst(["Shawn", "Alex", "John"]));

// Task 5
// Write destructuring code to assign variables that will help us return the expected string.
// Also, change the string to be using Template literals:
const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr) {
    [firstFav, secondFav, thirdFav] = arr;
    return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`;
}

console.log(returnFavorites(favoriteActivities));

// Task 6
// Use the Rest and Spread Operator to help take any number of arrays, and return one array.
// You will need to change how the arrays are passed in.
// You may write it assuming you will always recieve three arrays if you would like to.
function combineAnimals(...animals) {
    let combined = [];
    for (let arr of animals) {
        combined = [...arr, ...combined];
    }
    return combined;
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]

// Task 7
// Try to make the following function more ES6y:
function product(...params) {
    var numbers = params;

    return numbers.reduce((acc, number) => acc * number, 1);
}

console.log(product(1, 2, 3, 4, 5));

// Task 8
// Make the following function more ES6y. Use at least both the rest and spread operators:
function unshift(array, ...rest) {
    return [...array, ...rest];
}

console.log(unshift(["Dog", "Cat"], ["Horse", "Shark"], "Rat"));

// Task 9
// Write some destructuring code to help this function out.
// Use the ES6 shorthand that helps make the syntax look less redundant to simplify it:
function populatePeople(names) {
    return names.map(name => {
        name = name.split(" ");
        [firstName, lastName] = name;
        return { firstName, lastName };
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]