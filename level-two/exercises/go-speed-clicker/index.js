let playing = false;
let clickCount = 0;
let countdown = 10
let countdownIntervalID;

const clickCountTag = document.getElementById("click-count-value");
const countdownTag = document.getElementById("countdown");

document.addEventListener("click", function(event) {
    if (!playing) {
        setTimeout(resetGame, 10000);
        countdownIntervalID = setInterval(decreaseCountdownTimer, 1000);
        playing = true;
    }
    clickCount++;
    clickCountTag.textContent = clickCount;
});

// Set an interval so every one second the click countdown timer decreases
function decreaseCountdownTimer() {
    countdown--;
    countdownTag.textContent = `Time remaining: ${countdown} seconds`;
}

function resetGame() {
    clearInterval(countdownIntervalID);
    playing = false;
    clickCount = 0;
    countdown = 10;
    clickCountTag.textContent = 0;
    countdownTag.textContent = "Time remaining: 10 seconds";
}

// Set a timeout to reset the countdown after 10 seconds
