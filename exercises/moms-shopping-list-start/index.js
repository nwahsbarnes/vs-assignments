const input = document.getElementById("title");
const groceryList = document.getElementById("groceryList");

/**
 * Form submit event listener
 */
document.addItem.addEventListener("submit", function(event) {
    event.preventDefault();
    addListItem(input.value);
    input.value = "";
});

/**
 * 
 * @param {string} item 
 */
function addListItem(item) {
    // Create the list item element
    const newListItem = document.createElement("li");
    // Create and set the item's text value
    const itemName = document.createElement("div");
    itemName.textContent = item;
    // Create the edit and remove buttons
    const editButton = document.createElement("button");
    editButton.textContent = "edit";
    const removeButton = document.createElement("button");
    removeButton.textContent = "X";
    // Add button event listeners
    editButton.addEventListener("click", function(event) {
        // Create the edit input element
        const editInput = document.createElement("input"); // Defaults to type="text"
        editInput.placeholder = "editing " + "'" + item + "'";
        // Add input element and remove previous item name
        newListItem.prepend(editInput);
        newListItem.removeChild(itemName);
        // Create the save button
        const saveButton = document.createElement("button");
        saveButton.textContent = "save";
        // Replace the edit button with the save button
        editButton.replaceWith(saveButton);
        // Set save button event listener
        saveButton.addEventListener("click", function(event) {
            // Update the text with the new input
            if (editInput.value === "") {
                // Don't save/update on an empty string
                return;
            }
            itemName.textContent = editInput.value;
            // Replace the edit input element with the new item name
            editInput.replaceWith(itemName);
            saveButton.replaceWith(editButton);
            // Save to session storage
            sessionStorage.setItem("groceryList", getGroceryItemNames());
        });
    });
    removeButton.addEventListener("click", function(event) {
        groceryList.removeChild(newListItem);
        sessionStorage.setItem("groceryList", getGroceryItemNames());
    });
    // Add the created elements to the list item
    newListItem.append(itemName, editButton, removeButton);
    // Add the new list item to the grocery list
    groceryList.append(newListItem);
    // Save to session storage
    sessionStorage.setItem("groceryList", getGroceryItemNames());
}

let hasLoadedGroceryItems = false;
function loadGroceryItems() {
    // Only load grocery items once
    if (!hasLoadedGroceryItems) {
        const groceryListString = sessionStorage.getItem("groceryList");
        if (groceryListString !== null) {
            for (let element of groceryListString.split(",")) {
                addListItem(element);
            }
            hasLoadedGroceryItems = true;
        }
    }
}
// Load the previous grocery items if any are saved
loadGroceryItems();

/**
 * @returns a string array of the grocery list item names
 */
function getGroceryItemNames() {
    let groceryItemNames = [];
    const groceryListItems = groceryList.querySelectorAll("div");
    for (let element of groceryListItems) {
        groceryItemNames.push(element.textContent);
    }
    return groceryItemNames;
}