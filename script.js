const gameBoard = (() => {
  "use strict";

  let _currentPlayer = "X";
  let gameboard = ["X", "X", "O", "X", "X", "X", "O", "O", "O"];

  // 0,1,2,
  // 3,4,5,
  // 6,7,8

  // create a gameboard

  function _logInfo() {
    console.log(gameboard);
    console.log(_currentPlayer);
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
      newElement.classList.add(`cell`, `cell-${[i]}`);
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

  gameBoard.renderGameBoard(gameBoard.gameboard);
  return {};
})();

const Player = (name) => {
  const instructions = document.querySelector(".instructions");

  //todo: create a function that

  const showPlayer = () => (instructions.textContent = `Your move, ${name}!`);
  return { showPlayer };
};

const playerOne = Player("X");

const playerTwo = Player("O");

playerOne.showPlayer();
playerTwo.showPlayer();
gameBoard.reportInfo();
