const travelForm = document["travel-form"];

travelForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = travelForm["first-name"].value;
    const lastName = travelForm["last-name"].value;
    const age = travelForm.age.value;
    const gender = travelForm.gender.value;
    const destination = travelForm.destination.value;

    const checkedBoxes = document.querySelectorAll("input[name=diet]:checked");
    const diet = [];
    checkedBoxes.forEach(checked => diet.push(checked.value));

    alert(`First Name: ${firstName}\nLast Name: ${lastName}\nAge: ${age}\nGender: ${gender}\nDestination: ${destination}\nDiet: ${diet}`);
});