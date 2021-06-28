const Player = (mark) => {
  const showMark = () => mark;
  return { showMark };
};

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
  function renderGameBoard(array) {
    // for (let i = 0; i < array.length; i++) {
    //   let element = document.querySelector(".gameboard");
    //   let newElement = document.createElement("section");
    //   newElement.classList.add(`cell`, `cell-${[i]}`, `${[i]}`);
    //   newElement.textContent = `${el}`;
    //   // if (array[i].includes("X") || array[i].includes("O")) {
    //   //   newElement.textContent = array[i];
    //   // }
    //   element.appendChild(newElement);
    // }

    array.forEach((el, i) => {
      let element = document.querySelector(".gameboard");
      let newElement = document.createElement("section");
      newElement.classList.add(`cell`, `cell-${i}`, `${i}`);
      newElement.textContent = `${el}`;
      // if (array[i].includes("X") || array[i].includes("O")) {
      //   newElement.textContent = array[i];
      // }
      element.appendChild(newElement);
    });
  }

  return {
    renderGameBoard,
    reportInfo,
    gameboard,
  };
})();

const displayController = (() => {
  "use strict";

  const playerOne = Player("X");

  const playerTwo = Player("O");

  let currentPlayer = "X";

  let round = 1;

  let winner = false;

  const instructions = document.querySelector(".instructions");

  function _logInfo() {
    console.log(currentPlayer);
    console.log(winner);
  }

  function reportInfo() {
    _logInfo();
  }

  // TODO: logic that determines whether a spot can be marked by a player

  function markPos() {
    document.querySelectorAll(".cell").forEach((item) => {
      item.addEventListener("click", (e) => {
        let selected = e.target.classList[2];
        if (winner === true) {
          return checkForWinner();
        } else if (gameBoard.gameboard[`${selected}`] === "") {
          e.target.textContent = `${currentPlayer}`;
          gameBoard.gameboard[`${selected}`] = `${currentPlayer}`;
          checkForWinner();
          console.log(selected);
          console.log(winner);
        } else if (
          e.target.textContent === playerTwo.showMark() ||
          e.target.textContent === playerOne.showMark()
        ) {
          console.log("Error, choose another area");
        }
        if (
          currentPlayer === playerOne.showMark() &&
          e.target.textContent === playerOne.showMark()
        ) {
          currentPlayer = playerTwo.showMark();
        } else if (
          currentPlayer === playerTwo.showMark() &&
          e.target.textContent === playerTwo.showMark()
        ) {
          currentPlayer = playerOne.showMark();
        }
        showPlayer();
        console.log(currentPlayer);
      });
    });
  }

  function showPlayer() {
    const playerData = document.querySelectorAll(".game-status > p");
    if (winner === true) {
      instructions.textContent = `It's a draw!`;
    } else if (currentPlayer === playerOne.showMark()) {
      // TODO: add text-decoration underline
      instructions.textContent = `Your move, ${currentPlayer}!`;
      // playerData[0].textContent = "Player (X)";
    } else if (currentPlayer === playerTwo.showMark()) {
      // TODO: add text-decoration underline
      instructions.textContent = `Your move, ${currentPlayer}!`;
      // playerData[1].textContent = "Player (O)";
    }
  }

  function checkForWinner() {
    // TODO: add logic to check for a draw/winner
    // first conditional should check whether 9 rounds have played - if this happens the game is automatically a draw
    if (round === 9) {
      winner = true;
    }
    console.log(round);
    round++;
  }

  function checkForDraw() {
    if (round >= 9) {
      instructions.textContent = `It's a draw!`;
    }
    console.log(round);
    round++;
  }

  gameBoard.renderGameBoard(gameBoard.gameboard);

  instructions.textContent = `Your move, ${playerOne.showMark()}!`;

  markPos();

  return {
    reportInfo,
    currentPlayer,
    winner,
  };
})();

gameBoard.reportInfo();
displayController.reportInfo();
