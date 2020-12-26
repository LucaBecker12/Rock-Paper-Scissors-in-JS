const player_score = document.getElementById("player_score")
const computer_score = document.getElementById("computer_score")
const winning_message = document.getElementById("winning-message")
const resetBtn = document.getElementById("reset")
const elements = document.querySelectorAll(".option")
const options = ["r", "p", "s"];

const player_win = "Player won."
const computer_win = "Computer won."

elements.forEach(elem => {
    elem.addEventListener("click", function() {handleClick(elem.id)})
})

resetBtn.addEventListener('click', function () {
    computer_score.innerText = 0;
    player_score.innerText = 0;
})

function handleClick(id) {
    console.log("clicked")
    var computer = options[Math.floor(Math.random() * options.length)]
    switch (id) {
        case 'r':
            find_Winner("r", computer);
            break;
        case "p":
            find_Winner("p", computer);
            break;
        case "s":
            find_Winner("s", computer);
            break;
        default:
            break;
    }
}

function find_Winner(user, comp) {
    if (user == comp) {
        winning_message.innerText = "Draw. Nobody won."
    }

    switch (user + comp) {
        case "rp":
            winning_message.innerText = "Paper beats rock. " + computer_win;
            computer_score.innerText = parseInt(computer_score.innerText) + 1;
            break;
        case "rs":
            winning_message.innerText = "Rock beats scissors. " + player_win;
            player_score.innerText = parseInt(player_score.innerText) + 1;
            break;
        case "pr":
            winning_message.innerText = "Paper beats rock. " + player_win;
            player_score.innerText = parseInt(player_score.innerText) + 1;
            break;
        case "ps":
            winning_message.innerText = "Scissors beat paper. " + computer_win;
            computer_score.innerText = parseInt(computer_score.innerText) + 1;
            break;
        case "sr":
            winning_message.innerText = "Rock beats scissors. " + computer_win;
            computer_score.innerText = parseInt(computer_score.innerText) + 1;
            break;
        case "sp":
            winning_message.innerText = "Scissors beat paper." + player_win;
            player_score.innerText = parseInt(player_score.innerText) + 1;
            break;
        default:
            break;
    }
}