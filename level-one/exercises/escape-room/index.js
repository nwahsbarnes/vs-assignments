const readline = require("readline-sync");

let alive = true;
let doorOpen = false;
let foundKey = false;

const options = ["Put hand in hole", "Find the key", "Open the door"];

while (alive && !doorOpen) {
    const response = readline.keyInSelect(options, "Select an option:");

    switch (response) {
        case 0: // Put hand in hole
            alive = false;
            console.log("Oh dear, you've put your hand in a trap and died.");
            break;
        case 1: // Find the key
            foundKey = true;
            console.log("You've found the key. Now open the door!");
            break;
        case 2: // Open the door
            if (foundKey) {
                console.log("You use the key on the door. The door opens.");
                console.log("You escape!");
                doorOpen = true;
            } else {
                console.log("The door is locked.");
            }
    }
}