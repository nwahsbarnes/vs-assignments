const square = document.getElementById("square");

// Square event listeners
square.addEventListener("mouseover", function() { square.style.backgroundColor = "blue"; });
square.addEventListener("mousedown", function() { square.style.backgroundColor = "red"; });
square.addEventListener("mouseup", function() { square.style.backgroundColor = "yellow"; });
square.addEventListener("dblclick", function() { square.style.backgroundColor = "green"; });
// Body event listeners
document.body.addEventListener("wheel", function() { square.style.backgroundColor = "orange" });
// Key press event listeners
document.body.addEventListener("keypress", function(event) {
    switch (event.key) {
        case "b":
            square.style.backgroundColor = "blue";
            return;
        case "r":
            square.style.backgroundColor = "red";
            return;
        case "y":
            square.style.backgroundColor = "yellow";
            return;
        case "g":
            square.style.backgroundColor = "green";
            return;
        case "o":
            square.style.backgroundColor = "orange";
            return;
    }
});