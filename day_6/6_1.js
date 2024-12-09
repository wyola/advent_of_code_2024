const TEST_INPUT = require("./TEST_INPUT");

const countMoves = (inputString) => {
  const boardArray = inputString.split("\n").map((line) => line.split(""));

  let guardPositionX = 0;
  let guardPositionY = 0;

  for (let i = 0; i < boardArray.length; i++) {
    for (let j = 0; j < boardArray[i].length; j++) {
      if (boardArray[i][j] === "^") {
        guardPositionY = i;
        guardPositionX = j;
      }
    }
  }

  let isOnBoard = true;
  let movesCounter = 0;

  const directions = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ];

  let currentDirectionIndex = 0;

  while (isOnBoard) {
    let currentDirection = directions[currentDirectionIndex];
    let nextX = guardPositionX + currentDirection[0];
    let nextY = guardPositionY + currentDirection[1];
    isOnBoard =
      nextX < boardArray[0].length &&
      nextY < boardArray.length &&
      nextX >= 0 &&
      nextY >= 0;

    if (!isOnBoard) {
      movesCounter++;
      break;
    }

    let nextBoardElement = boardArray[nextY][nextX];
    if (nextBoardElement === "#") {
      currentDirectionIndex = (currentDirectionIndex + 1) % directions.length;
    } else {
      guardPositionX = nextX;
      guardPositionY = nextY;
      if (nextBoardElement === ".") {
        movesCounter++;
      }
      boardArray[nextY][nextX] = "z";
    }
  }

  return movesCounter;
};

console.log(countMoves(TEST_INPUT));
