const gameBoard = (() => {
  "use strict";

  let gameboard = ["", "", "", "", "", "", "", "", ""];

  // 0,1,2,
  // 3,4,5,
  // 6,7,8

  // create a gameboard

  function _logInfo() {
    console.log(gameboard);
  }

  function reportInfo() {
    _logInfo();
  }

  // render the gameboard using the gameboard array
  // todo: do this wihout a standard for loop later
  function renderGameBoard(array) {
    for (let i = 0; i < array.length; i++) {
      let element = document.querySelector(".gameboard");
      let newElement = document.createElement("section");
      newElement.classList.add(`cell`, `cell-${[i]}`, `${[i]}`);
      if (array[i].includes("X") || array[i].includes("O")) {
        newElement.textContent = array[i];
      }
      element.appendChild(newElement);
    }
  }

  return {
    renderGameBoard: renderGameBoard,
    reportInfo: reportInfo,
    gameboard: gameboard,
  };
})();

const displayController = (() => {
  "use strict";

  let currentPlayer = "X";

  const instructions = document.querySelector(".instructions");

  function showPlayer() {
    const playerData = document.querySelectorAll(".game-status > p");
    if (currentPlayer === "X") {
      // todo: add text-decoration underline
      // playerData[0].textContent = "Player (X)";
    } else if (currentPlayer === "O") {
      // todo: add text-decoration underline
      // playerData[1].textContent = "Player (O)";
    }
    instructions.textContent = `Your move, ${currentPlayer}!`;
  }

  function _logInfo() {
    console.log(currentPlayer);
  }

  function reportInfo() {
    _logInfo();
  }

  gameBoard.renderGameBoard(gameBoard.gameboard);

  // todo: logic that determines whether a spot can be marked by a player

  document.querySelectorAll(".cell").forEach((item) => {
    item.addEventListener("click", (event) => {
      let selected = event.target.classList[2];
      if (gameBoard.gameboard[`${selected}`] === "") {
        event.target.textContent = `${currentPlayer}`;
        gameBoard.gameboard[`${selected}`] = `${currentPlayer}`;
        console.log(selected);
      } else if (
        event.target.textContent === "O" ||
        event.target.textContent === "X"
      ) {
        console.log("Error, choose another area");
      }
      if (currentPlayer === "X") {
        currentPlayer = "O";
      } else if (currentPlayer === "O") {
        currentPlayer = "X";
      }
      showPlayer();
      console.log("Checking for win condition....");
      console.log(currentPlayer);
    });
  });

  return {
    reportInfo: reportInfo,
    currentPlayer: currentPlayer,
    showPlayer: showPlayer,
  };
})();

const Player = (name) => {
  const showPlayer = () => displayController.showPlayer(name);
  return { showPlayer };
};

const playerOne = Player("X");

const playerTwo = Player("O");

playerOne.showPlayer();
playerTwo.showPlayer();
gameBoard.reportInfo();
displayController.reportInfo();
