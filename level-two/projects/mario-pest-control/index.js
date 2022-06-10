const calcButton = document.getElementById("calc-button");

calcButton.addEventListener("click", function(event) {
    const goomba = document.getElementById("goomba-input").value;
    const bobomb = document.getElementById("bob-omb-input").value;
    const cheepCheep = document.getElementById("cheep-cheep-input").value;
    const total = goomba * 5 + bobomb * 7 + cheepCheep * 11;
    document.getElementById("calculate-answer").textContent = total;
});