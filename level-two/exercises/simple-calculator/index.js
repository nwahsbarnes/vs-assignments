const addForm = document["add-form"];
const subtractForm = document["subtract-form"];
const multiplyForm = document["multiply-form"];

const addAnswerTag = document.getElementById("add-answer");
const subtractAnswerTag = document.getElementById("subtract-answer");
const multiplyAnswerTag = document.getElementById("multiply-answer");

addForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let num1 = addForm["add-num1"].value;
    let num2 = addForm["add-num2"].value;
    if (num1 === "") {
        alert("Add: Missing first input field.");
        return;
    }
    if (num2 === "") {
        alert("Add: Missing second input field.");
        return;
    }

    const answer = Number(num1) + Number(num2);
    
    addAnswerTag.textContent = answer;
});

subtractForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let num1 = subtractForm["subtract-num1"].value;
    let num2 = subtractForm["subtract-num2"].value;
    if (num1 === "") {
        alert("Subtract: Missing first input field.");
        return;
    }
    if (num2 === "") {
        alert("Subtract: Missing second input field.");
        return;
    }

    const answer = Number(num1) - Number(num2);
    
    subtractAnswerTag.textContent = answer;
});

multiplyForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let num1 = multiplyForm["multiply-num1"].value;
    let num2 = multiplyForm["multiply-num2"].value;
    if (num1 === "") {
        alert("Add: Missing first input field.");
        return;
    }
    if (num2 === "") {
        alert("Add: Missing second input field.");
        return;
    }

    const answer = Number(num1) * Number(num2);
    
    multiplyAnswerTag.textContent = answer;
});

/** Functionality to reset answers on input change event */
const addNum1Input = addForm["add-num1"];
addNum1Input.addEventListener("change", function(event) {
    addAnswerTag.textContent = "";
});

const addNum2Input = addForm["add-num2"];
addNum2Input.addEventListener("change", function(event) {
    addAnswerTag.textContent = "";
});

const subtractNum1Input = subtractForm["subtract-num1"];
subtractNum1Input.addEventListener("change", function(event) {
    subtractAnswerTag.textContent = "";
});

const subtractNum2Input = subtractForm["subtract-num2"];
subtractNum2Input.addEventListener("change", function(event) {
    subtractAnswerTag.textContent = "";
});

const multiplyNum1Input = multiplyForm["multiply-num1"];
multiplyNum1Input.addEventListener("change", function(event) {
    multiplyAnswerTag.textContent = "";
});

const multiplyNum2Input = multiplyForm["multiply-num2"];
multiplyNum2Input.addEventListener("change", function(event) {
    multiplyAnswerTag.textContent = "";
});