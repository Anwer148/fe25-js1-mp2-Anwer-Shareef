let total = 0;
let round = 0;
let roundPoints = 0;
let gameOver = false;



document.addEventListener("DOMContentLoaded", function () {
    
    const form = document.getElementById("startForm");

   
    if (form) {
        form.addEventListener("submit", function(event) {
          
            event.preventDefault();

            
            let nameInput = document.querySelector("#nameInput").value;

          
            localStorage.setItem("playerName", nameInput);
            window.location.href = "spel.html";
        });
    }


    let savedName = localStorage.getItem("playerName");
    
    let playerNameDisplay = document.getElementById("playerName");

    if (savedName && playerNameDisplay) {
        playerNameDisplay.textContent = "Spelare: " + savedName;
    }
});



function rollDice() {
    if (gameOver) return;

    let dice = Math.floor(Math.random() * 6) + 1;

    
    document.getElementById("dice").textContent = dice;

    
    document .getElementById("diceImage")
        .setAttribute("src", "img/Dice-" + dice + ".png");

    if (dice === 1) {
        roundPoints = 0;
        round++;
        document.getElementById("roundScore").textContent = roundPoints;
        document.getElementById("rounds").textContent = round;
    } else {
        roundPoints += dice;
        document.getElementById("roundScore").textContent = roundPoints;
    }
}

function hold() {
    if (gameOver) return;

    total += roundPoints;
    roundPoints = 0;
    round++;

    document.getElementById("totalScore").textContent = total;
    document.getElementById("roundScore").textContent = roundPoints;
    document.getElementById("rounds").textContent = round;

    if (total >= 100) {
        document.getElementById("message").textContent =
            "Spelet är slut efter  " + round + " omgångar!";
        gameOver = true;
    }
}
