

function getFizzBuzzCount(num) {
    let fizzCount = 0;
    let buzzCount = 0;
    let fizzBuzzCount = 0;
    for (let i = 1; i <= num; i++) {
        let isMultipleThree = i % 3 === 0;
        let isMultipleFive = i % 5 === 0;
        if (isMultipleThree && isMultipleFive) {
            console.log(i + ": FizzBuzz");
            fizzBuzzCount++;
        } else if (isMultipleThree) {
            console.log(i + ": Fizz");
            fizzCount++;
        } else if (isMultipleFive) {
            console.log(i + ": Buzz");
            buzzCount++;
        } else {
            console.log(i);
        }
    }
    return {
        fizz: fizzCount,
        buzz: buzzCount,
        fizzBuzz: fizzBuzzCount
    };
}

function getLargestNumber(numbers) {
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}

// console.log(getLargestNumber([1, 8, 23, 33]));

function getWordsContaining(char, words) {
    let matches = [];
    for (let word of words) {
        if (word.indexOf(char) !== -1) {
            matches.push(word);
        }
    }
    return matches;
}

// console.log(getWordsContaining("!", ["#3", "$$$", "C%4!", "Hey!"]));

/** Is num1 divisible by num2 */
function isDivisible(num1, num2) {
    return num1 % num2 === 0;
}

console.log(isDivisible(25, 35));