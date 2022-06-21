
function getToDoList() {
    return axios.get("https://api.vschool.io/shawnbarnes/todo")
        .then(response => response.data)
        .catch(err => err);
}

function displayToDoList() {
    const todoList = getToDoList();
    todoList.then(data => {
        // Clear the current ToDo list
        clearList();

        // Add each retrieved entry to the list
        const todoListElement = document.getElementById("todo-list");
        for (let i = 0; i < data.length; i++) {
            addListItem(todoListElement, data[i]);
        }
    });
}

// {"completed":false,"_id":"62ae086118d1a05bceae58f4","title":"Career prep","description":"Start practicing job search","price":40,"sessionId":"shawnbarnes","__v":0}
function addListItem(listElement, obj) {

    // Create the div container
    const listItem = document.createElement("div");
    listItem.className = "list-item";
    // Create the title header
    const h1 = document.createElement("h1");
    h1.textContent = obj.title;
    if (obj.completed) {
        h1.style.textDecoration = "line-through";
    }
    // Add completion
    const completed = document.createElement("p");
    const completionColor = (obj.completed) ? "#00FF00" : "#FF0000";
    completed.textContent = `Completed: ${obj.completed}`
    completed.style.color = completionColor;
    // Add the checkbox for completion
    const completionDiv = document.createElement("div");
    const completionCheckBoxLabel = document.createElement("label");
    const completionCheckBox = document.createElement("input");
    completionCheckBoxLabel.htmlFor = "completionCheckBox";
    completionCheckBoxLabel.textContent = "Mark completed:"
    completionCheckBox.name = "completionCheckBox";
    completionCheckBox.type = "checkbox";
    if (obj.completed) {
        completionCheckBox.checked = "true";
    }
    completionCheckBox.addEventListener("change", toggleCompleted);
    completionCheckBox.id = obj._id;
    completionDiv.append(completed, completionCheckBoxLabel, completionCheckBox);
    // Description
    const description = document.createElement("p");
    description.textContent = `Description: ${obj.description}`;
    // Price
    const price = document.createElement("p");
    price.textContent = `Price: ${obj.price}`;
    // Add the elements to the div container
    listItem.append(h1, completionDiv, description, price);
    // Add the image if it exists
    if (typeof obj.imgUrl != "undefined") {
        const img = document.createElement("img");
        img.src = obj.imgUrl;
        listItem.appendChild(img);
    }
    // Add the delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete ToDo"
    deleteButton.addEventListener("click", deleteTodo);
    deleteButton.id = obj._id;
    listItem.appendChild(deleteButton);
    // Append the list-item to the todo-list
    listElement.appendChild(listItem);
}

/**
 * Sends to the server a request to change the completed status
 * and reflects that change immediately.
 */
function toggleCompleted() {
    const update = {
        "completed": this.checked
    }
    axios.put(`https://api.vschool.io/shawnbarnes/todo/${this.id}`, update)
        .then(response => displayToDoList())
        .catch(err => console.log(err));
}

/**
 * Submits a delete request to the server
 */
function deleteTodo() {
    axios.delete(`https://api.vschool.io/shawnbarnes/todo/${this.id}`)
        .then(response => displayToDoList())
        .catch(err => console.log(err));
}

/**
 * Clears the list of ToDos
 */
function clearList() {
    const todoListElement = document.getElementById("todo-list");
    while (todoListElement.firstChild) {
        todoListElement.removeChild(todoListElement.firstChild);
    }
}

const submitFormButton = document.getElementById("submit-form-button");
const form = document["todo-add-form"];
// Submit the new item to the server on click
submitFormButton.addEventListener("click", function (event) {
    event.preventDefault();
    const obj = {
        "title": form["add-title"].value,
        "completed": form["add-completed"].value,
        "description": form["add-description"].value,
        "imgUrl": form["add-img"].value,
        "price": Number(form["add-price"].value)
    }
    axios.post("https://api.vschool.io/shawnbarnes/todo", obj)
        .then(response => displayToDoList())
        .catch(err => console.log(err));
    // Clear form inputs after submitting
    clearFormInputs();
});

/**
 * Clears the forms input fields
 */
function clearFormInputs() {
    form["add-title"].value = "";
    form["add-completed"].value = "";
    form["add-description"].value = "";
    form["add-img"].value = "";
    form["add-price"].value = "";
}

displayToDoList();