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
  let isDraw = false;
  let isWinner = false;

  const instructions = document.querySelector(".instructions");

  function _logInfo() {
    console.log(currentPlayer);
    console.log(isDraw);
    console.log(`The round number is ${round}`);
  }

  function reportInfo() {
    _logInfo();
  }

  // TODO: logic that determines whether a spot can be marked by a player

  function markPos() {
    document.querySelectorAll(".cell").forEach((item) => {
      item.addEventListener("click", (e) => {
        let selected = e.target.classList[2];
        if (gameBoard.gameboard[`${selected}`] === "") {
          e.target.textContent = `${currentPlayer}`;
          gameBoard.gameboard[`${selected}`] = `${currentPlayer}`;
          checkForDraw();
          // checkForWinner();
          console.log(selected);
          console.log(isDraw);
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
        showInfo();
        console.log(currentPlayer);
      });
    });
  }
  function showInfo() {
    if (isDraw === true && isWinner === false) {
      instructions.textContent = `It's a draw!`;
      // TODO: if winner is true display winner
    } else if (isDraw === false && isWinner === true) {
      // NOTE: shows next player instead of current winner
      instructions.textContent = `Player ${currentPlayer} wins!`;
    } else {
      showPlayer();
    }
  }

  function showPlayer() {
    const playerData = document.querySelectorAll(".game-status > p");
    if (currentPlayer === playerOne.showMark()) {
      // TODO: add text-decoration underline
      instructions.textContent = `Your move, ${currentPlayer}!`;
      // playerData[0].textContent = "Player (X)";
    } else if (currentPlayer === playerTwo.showMark()) {
      // TODO: add text-decoration underline
      instructions.textContent = `Your move, ${currentPlayer}!`;
      // playerData[1].textContent = "Player (O)";
    }
  }

  const checkForDraw = () => {
    // TODO: add logic to check for a draw
    // first conditional should check whether 9 rounds have played - if this happens the game is automatically a draw
    if (round === 9) {
      return (isDraw = true);
    }
    return round++;
  };

  const checkForWinner = () => {
    // TODO: check array for win conditions
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    if (winner === true) {
    }
    console.log(round);
    round++;
  };

  gameBoard.renderGameBoard(gameBoard.gameboard);

  instructions.textContent = `Your move, ${playerOne.showMark()}!`;

  markPos();

  return {
    reportInfo,
    currentPlayer,
    isWinner,
  };
})();

gameBoard.reportInfo();
displayController.reportInfo();
