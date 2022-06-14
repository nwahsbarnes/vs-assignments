// 1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number

function sum(x, y) {
    try {
        if (typeof x != "number" || typeof y != "number") {
            throw new Error("Inputs must be numbers.");
        }
        return x + y;
    } catch (err) {
        console.log("Input error");
    }
}

// 1b) Call the sum function inside a try block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error.
console.log(sum("1", 2));

// 2a) Given a user object, write a function called login that takes a username and password as parameters.
// Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"

var user = { username: "sam", password: "123abc" };
function login(username, password) {
    try {
        if (username != user.username || password != user.password) {
            throw new Error("Invalid creentials");
        }
        console.log("Login successful!");
    } catch (err) {
        console.log("Invalid credentials");
    }
}

// 2b) Call the login function within a try block. In one instance use the correct credentials, and in another use incorrect ones. Make sure you see the appropriate message!
try {
    login("sam", "123abc");
} catch(err) {
    console.log("There was an error logging in.");
}