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

  const instructions = document.querySelector(".instructions");

  function _logInfo() {
    console.log(currentPlayer);
  }

  function reportInfo() {
    _logInfo();
  }

  // todo: logic that determines whether a spot can be marked by a player

  function markPos() {
    document.querySelectorAll(".cell").forEach((item) => {
      item.addEventListener("click", (e) => {
        let selected = e.target.classList[2];
        if (gameBoard.gameboard[`${selected}`] === "") {
          e.target.textContent = `${currentPlayer}`;
          gameBoard.gameboard[`${selected}`] = `${currentPlayer}`;
          console.log(selected);
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
        console.log("Checking for win condition....");
        console.log(currentPlayer);
      });
    });
  }

  function showPlayer() {
    const playerData = document.querySelectorAll(".game-status > p");
    if (currentPlayer === playerOne.showMark()) {
      // todo: add text-decoration underline
      // playerData[0].textContent = "Player (X)";
    } else if (currentPlayer === playerTwo.showMark()) {
      // todo: add text-decoration underline
      // playerData[1].textContent = "Player (O)";
    }
    instructions.textContent = `Your move, ${currentPlayer}!`;
  }

  gameBoard.renderGameBoard(gameBoard.gameboard);

  instructions.textContent = `Your move, ${playerOne.showMark()}!`;

  markPos();

  return {
    reportInfo,
    currentPlayer,
  };
})();

gameBoard.reportInfo();
displayController.reportInfo();
