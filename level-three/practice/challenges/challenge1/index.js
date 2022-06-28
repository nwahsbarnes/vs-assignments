

function isHappy(num) {
    // If num is 1, then it's happy
    if (num === 1) {
        return true;
    }
    // If num is 4, then it's not happy
    if (num === 4) {
        return false;
    }
    // Convert the num to a string and split it into an array
    const numbers = String(num).split("");
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += Math.pow(Number(numbers[i]), 2);
    }
    return isHappy(sum);
}

console.log(isHappy(203)) // true
console.log(isHappy(11)) // false
console.log(isHappy(107)) // false
console.log(isHappy(100)) // true
console.log(isHappy(102)) // false
console.log(isHappy(103)) // true