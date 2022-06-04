// Preliminary
function preliminary() {
    // Print 0 to 9
    console.log("Printing 0 through 9");
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    // Print 9 to 0
    console.log("Printing 9 through 0");
    for (let i = 9; i >= 0; i--) {
        console.log(i);
    }

    const fruit = ["banana", "orange", "apple", "kiwi"]
    console.log("Fruits: " + fruit);
}


// Bronze Medal
function bronzeMedal() {
    // 1. Write a for loop that will push the numbers 0 through 9 to an array.
    const numArray = [];
    for (let i = 0; i < 10; i++) {
        numArray.push(i);
    }
    // 2. Write a for loop that prints to the console only even numbers 0 through 100.
    console.log("0 through 100 evens only");
    for (let i = 0; i <= 100; i += 2) {
        console.log(i);
    }
    // 3. Write a for loop that will push every other fruit to an array.`const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]`
    const fruit2 = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
    const pushedFruit = [];
    for (let i = 0; i < fruit2.length; i += 2) {
        pushedFruit.push(fruit2[i]);
    }
    console.log(pushedFruit);
}

// Silver Medal
function silverMedal() {
    const peopleArray = [
        {
            name: "Harrison Ford",
            occupation: "Actor"
        },
        {
            name: "Justin Bieber",
            occupation: "Singer"
        },
        {
            name: "Vladimir Putin",
            occupation: "Politician"
        },
        {
            name: "Oprah",
            occupation: "Entertainer"
        }
    ]
    const names = [];
    const occupations = [];

    // 1. Write a loop that will print out all the names of the people of the people array
    for (let i = 0; i < peopleArray.length; i++) {
        console.log(peopleArray[i].name);
    }
    // 2. Write a loop that pushes the names into a `names` array, and the occupations into an `occupations` array.
    for (let i = 0; i < peopleArray.length; i++) {
        names.push(peopleArray[i].name);
    }
    for (let i = 0; i < peopleArray.length; i++) {
        occupations.push(peopleArray[i].occupation);
    }
    console.log("Names: " + names);
    console.log("Occupations: " + occupations);
    // 3. Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to *another* array starting with, in this case, "Singer".
    const everyOtherName = [];
    const everyOtherOccupation = [];
    for (let i = 0; i < peopleArray.length; i += 2) {
        everyOtherName.push(peopleArray[i].name);
        everyOtherOccupation.push(peopleArray[i].occupation);
    }
}

// Gold Medal
function goldMedal() {
    // Print a 2d matrix like: (using for loops)
    // [
    //  [0, 0, 0],
    //  [0, 0, 0],
    //  [0, 0, 0]
    // ]
    const zeroed2DArray = [];
    for (let i = 0; i < 3; i++) {
        zeroed2DArray.push([]);
        for (let j = 0; j < 3; j++) {
            zeroed2DArray[i][j] = 0;
        }
    }
    console.log(zeroed2DArray);

    const incremented2DArray = [];
    for (let i = 0; i < 3; i++) {
        incremented2DArray.push([]);
        for (let j = 0; j < 3; j++) {
            incremented2DArray[i][j] = i;
        }
    }
    console.log(incremented2DArray);

    const incremented2DArray2 = [];
    for (let i = 0; i < 3; i++) {
        incremented2DArray2.push([]);
        for (let j = 0; j < 3; j++) {
            incremented2DArray2[i][j] = j;
        }
    }
    console.log(incremented2DArray2);
}

