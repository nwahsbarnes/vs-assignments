const header = document.getElementById("header");
header.textContent = "JavaScript Made This!!"; // Set the text of header
header.classList.add("header"); // Apply header class style

// Create the child header container
const childHeader = document.createElement("div");
// Create the name and apply the style class
const headerName = document.createElement("span");
headerName.textContent = "Shawn";
headerName.classList.add("name");
// Create the end of the message
const headerNameMessage = document.createElement("span");
headerNameMessage.textContent = " wrote the JavaScript";

// Add span elements to the childHeader div
childHeader.append(headerName, headerNameMessage);
// Add the div to the main header
header.append(childHeader);

// Replace current messages with random ones
const messages = document.querySelectorAll(".messages > div");
for (var element of messages) {
    element.textContent = getRandomMessage();
}
// Function to get a random message
function getRandomMessage() {
    const randomInt = Math.floor(Math.random() * 5);
    switch (randomInt) {
        case 0:
            return "I hope you have a great day!";
        case 1:
            return "You are awesome";
        case 2:
            return "It's a great day today";
        case 3:
            return "I think you are cool.";
        case 4:
            return "Haha";
    }
}

// Add clear button event listener
const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clearMessages);
// Clear button functionality to remove messages
function clearMessages() {
    for (var element of messages) {
        element.remove();
    }
}

// Add theme selection (option selection) event listener
const themeSelection = document.getElementById("theme-drop-down");
themeSelection.addEventListener("change", changeTheme);
// Function to change the message properties based on the theme selected
function changeTheme() {
    const messagesLeft = document.querySelectorAll(".message.left");
    const messagesRight = document.querySelectorAll(".message.right");
    switch (themeSelection.value) {
        case "theme-one": // brown/blue
            for (var element of messagesLeft) {
                element.style.color = "black";
                element.style.backgroundColor = "burlywood";
            }
            for (var element of messagesRight) {
                element.style.color = "black";
                element.style.backgroundColor = "aliceblue";
            }
            return;
        case "theme-two": // red/black
            for (var element of messagesLeft) {
                element.style.color = "black";
                element.style.backgroundColor = "red";
            }
            for (var element of messagesRight) {
                element.style.color = "white";
                element.style.backgroundColor = "black";
            }
            return;
        case "theme-three": // pink/purple
            for (var element of messagesLeft) {
                element.style.color = "black";
                element.style.backgroundColor = "pink";
            }
            for (var element of messagesRight) {
                element.style.color = "white";
                element.style.backgroundColor = "purple";
            }
            return;
    }
}