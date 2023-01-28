let editedPlayer = 0;
let activePlayer = 0;

const players = [
    {
        name: "",
        symbol: "X",
    },
    {
        name: "",
        symbol: "O",
    },
];

const activePlayerName = document.getElementById("active-player-name");
const winner = document.getElementById("winner-name");

const editPlayer1Btn = document.getElementById("edit-player-1-btn");
const editPlayer2Btn = document.getElementById("edit-player-2-btn");
const cancelBtn = document.getElementById("cancel");
const startGameBtn = document.getElementById("start-game-btn");
// const confirmBtn = document.getElementById("confirm");

const errorsOutput = document.getElementById("config-errors");
const gameArea = document.getElementById("active-game");
// const gameTiles = document.querySelectorAll("#game-board li");
const gameBoard = document.getElementById("game-board")

const form = document.querySelector("form");

const playerConfigOverlay = document.getElementById("config-overlay");
const backdrop = document.getElementById("backdrop");

editPlayer1Btn.addEventListener("click", openPlayerConfig);
editPlayer2Btn.addEventListener("click", openPlayerConfig);

cancelBtn.addEventListener("click", closePlayerConfig);
backdrop.addEventListener("click", closePlayerConfig);

form.addEventListener("submit", savePlayerConfig);

startGameBtn.addEventListener("click", startNewGame);

// for (const gameField of gameTiles) {
//     gameField.addEventListener("click", selectGameField);
// }

gameBoard.addEventListener("click", selectGameField);