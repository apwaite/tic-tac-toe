const Player = (mark) => {
  const showMark = () => mark;
  return { showMark };
};

const gameBoard = (() => {
  'use strict';

  let gameboard = ['', '', '', '', '', '', '', '', ''];

  // 0,1,2,
  // 3,4,5,
  // 6,7,8

  // create a gameboard

  // function _logInfo() {
  //   console.log(gameboard);
  // }

  // function reportInfo() {
  //   _logInfo();
  // }

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
      let element = document.querySelector('.gameboard');
      let newElement = document.createElement('div');
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
    // reportInfo,
    gameboard,
  };
})();

const displayController = (() => {
  'use strict';

  const playerOne = Player('X');
  const playerTwo = Player('O');

  let currentPlayer = 'X';
  let round = 1;
  let isDraw = false;
  let isWinner = false;
  let winningPlayer;

  const instructions = document.querySelector('.instructions');
  const gameOver = document.querySelector('.game-over');
  const newGame = document.querySelector('.new-game');
  const playerData = document.querySelectorAll('.game-status > p');

  newGame.addEventListener('click', () => {
    resetGameboard();
  });

  // function _logInfo() {
  //   console.log(currentPlayer);
  //   console.log(isDraw);
  //   console.log(`The round number is ${round}`);
  // }

  // function reportInfo() {
  //   _logInfo();
  // }

  function markPos() {
    document.querySelectorAll('.cell').forEach((item) => {
      item.addEventListener('click', (e) => {
        let selected = e.target.classList[2];
        if (gameBoard.gameboard[`${selected}`] === '') {
          e.target.textContent = `${currentPlayer}`;
          gameBoard.gameboard[`${selected}`] = `${currentPlayer}`;
          checkForDraw();
          checkForWinner();
          // console.log(selected);
          // console.log(isDraw);
          // console.log(isWinner);
        } else if (
          e.target.textContent === playerTwo.showMark() ||
          e.target.textContent === playerOne.showMark()
        ) {
          console.log('Error, choose another area');
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
        // console.log(currentPlayer);
      });
    });
  }

  function resetGameboard() {
    gameBoard.gameboard = ['', '', '', '', '', '', '', '', ''];
    round = 1;
    isDraw = false;
    isWinner = false;
    currentPlayer = 'X';
    showPlayer('X');
    resetPlayer();
    gameOver.style.display = 'none';
    document.querySelectorAll('.cell').forEach((el) => el.remove());
    gameBoard.renderGameBoard(gameBoard.gameboard);
    markPos();
  }

  function resetPlayer() {
    if (playerData[1].classList.value === 'player-o selected') {
      playerData[1].classList.toggle('selected');
      playerData[0].classList.toggle('selected');
    }
  }

  function addOverlay() {
    gameOver.style.display = 'flex';
    let result = isWinner ? `Player ${winningPlayer} Wins!` : `It's a Draw!`;
    gameOver.textContent = `Game Over! ${result}`;

    const newBtn = document.createElement('button');

    const newBtnText = document.createTextNode('Try Again?');

    newBtn.appendChild(newBtnText);
    gameOver.appendChild(newBtn);
    newBtn.className = 'btn try-again';

    const tryAgain = document.querySelector('.try-again');
    tryAgain.addEventListener('click', () => {
      resetGameboard();
    });
  }

  function showInfo() {
    if (isDraw === true && isWinner === false) {
      instructions.textContent = `It's a draw!`;
      addOverlay();
    } else if (isDraw === false && isWinner === true) {
      instructions.textContent = `Player ${winningPlayer} wins!`;
      addOverlay();
    } else if (isDraw === true && isWinner === true) {
      addOverlay();
    } else {
      showPlayer();
    }
  }

  function showPlayer() {
    if (currentPlayer === playerOne.showMark()) {
      instructions.textContent = `Your move, ${currentPlayer}!`;
      playerData[0].classList.toggle('selected');
      playerData[1].classList.toggle('selected');
    } else if (currentPlayer === playerTwo.showMark()) {
      instructions.textContent = `Your move, ${currentPlayer}!`;
      playerData[0].classList.toggle('selected');
      playerData[1].classList.toggle('selected');
    }
  }

  const checkForDraw = () => {
    // first conditional should check whether 9 rounds have played - if this happens the game is automatically a draw
    if (round === 9) {
      return (isDraw = true);
    }
    return round++;
  };

  const checkForWinner = () => {
    // TODO: create array of win conditions
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

    // TODO: map through the winConditions array and check whether the elements of the gameboard array match
    winConditions.map((el, i) => {
      // map through the winConditions array and assign each winCondition with an index
      const winCondition = winConditions[i];
      // record result of every element of the gameboard array by winCondition index to determine whether there's a match
      let index0 = gameBoard.gameboard[winCondition[0]];
      let index1 = gameBoard.gameboard[winCondition[1]];
      let index2 = gameBoard.gameboard[winCondition[2]];

      // console.log(winCondition);
      // console.table(`1: ${index0}, 2: ${index1}, 3: ${index2}`);

      // if values are blank do nothing
      if (index0 === '' || index1 === '' || index2 === '') {
        return;
      }
      // check whether all 3 indexes match
      if (index0 === index1 && index1 === index2) {
        isWinner = true;
        winningPlayer = currentPlayer;
        return;
      }
    });
  };

  gameBoard.renderGameBoard(gameBoard.gameboard);

  instructions.textContent = `Your move, ${currentPlayer}!`;

  markPos();

  return {
    // reportInfo,
    // currentPlayer,
    // isWinner,
  };
})();

// gameBoard.reportInfo();
// displayController.reportInfo();
