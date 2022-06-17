const name = "John"
const age = 101

function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])


// Task 1
// Rewrite .map() using an arrow function
const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(carrot => {
        return { type: "carrot", name: carrot }
    });
}

console.log(mapVegetables(carrots));

// Task 2
// Rewrite .filter()'s callback function using an arrow function
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(person => person.friendly);
}

console.log(filterForFriendly(people));

// Task 3
// Re-write the following functions to be arrow functions:
const sum = (a, b) => a + b;
console.log(sum(1, 2));

const produceProduct = (a, b) => a * b;
console.log(produceProduct(2, 5));

// Task 4
// Write a `printString` function that takes `firstName`, `lastName`, and `age` as parameters and returns a string like the following:
// `firstName` should default to `"Jane"lastName` should default to `"Doe"age` should default to`100`
// 
// Hi Kat Stark, how does it feel to be 40?
// 
function printString(firstName = "Jane", lastName = "Doe", age = 100) {
    return `Hi ${firstName} ${lastName}, how does it feel to be ${age}`;
}
console.log(printString("Kat", "Stark", 40));

// Task 5
// Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 function filterForDogs(arr) {
     return arr.filter(animal => animal.type === "dog");
 }
 console.log(filterForDogs(animals));
 
// Template Literals
// Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:
//
// Hi Janice!
// Welcome to Hawaii.
// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.

function printLocation(name, location) {
    console.log(`Hi ${name}!`);
    console.log(`Welcome to ${location}.`);
    console.log(`I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`);
}
printLocation("Janice", "Hawaii");