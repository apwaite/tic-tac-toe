const Gameboard = (() => {
  "use strict";

  let _privateProperty = "This is working interesting";
  let gameBoard = [["o"], ["x"], [""], [""], ["x"], ["o"], [""], ["x"], [""]];

  function _privateMethod() {
    console.log(_privateProperty);
  }

  function publicMethod() {
    _privateMethod();
  }

  return {
    publicMethod: publicMethod,
    gameBoard: gameBoard,
  };
})();

const displayController = (() => {
  "use strict";

  return {};
})();

const Player = (name) => {
  const sayName = () => console.log(`Your move, ${name}!`);
  return { sayName };
};

const playerOne = Player("X");

const playerTwo = Player("O");

playerOne.sayName();
playerTwo.sayName();
GameBoard.publicMethod();
console.log(Gameboard.gameBoard);
console.log(Gameboard._privateProperty);
