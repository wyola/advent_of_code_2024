const TEST_INPUT = require("./TEST_INPUT");

const getVisitedBoardElementKey = (boardPosX, boardPosY, direction) => {
  return `${boardPosX}-${boardPosY}-${direction[0]}-${direction[1]}`;
};

let log = false;

const isGoingInCircles = (boardArray, guardPositionX, guardPositionY) => {
  const directions = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ];

  let isOnBoard = true;
  let currentDirectionIndex = 0;
  const visitedBoardElements = {
    [getVisitedBoardElementKey(
      guardPositionX,
      guardPositionY,
      directions[currentDirectionIndex]
    )]: true,
  };

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
      break;
    }

    const nextBoardPositionKey = getVisitedBoardElementKey(
      nextX,
      nextY,
      currentDirection
    );
    if (log) {
      console.log(nextBoardPositionKey);
    }
    const wasThereInSameDirection = visitedBoardElements[nextBoardPositionKey];
    if (wasThereInSameDirection) {
      return true;
    }

    let nextBoardElement = boardArray[nextY][nextX];
    if (nextBoardElement === "#") {
      currentDirectionIndex = (currentDirectionIndex + 1) % directions.length;
    } else {
      guardPositionX = nextX;
      guardPositionY = nextY;
    }

    visitedBoardElements[
      getVisitedBoardElementKey(
        guardPositionX,
        guardPositionY,
        directions[currentDirectionIndex]
      )
    ] = true;
  }

  return false;
};

const countGoingInCircles = (inputString) => {
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

  let count = 0;

  for (let i = 0; i < boardArray.length; i++) {
    for (let j = 0; j < boardArray[i].length; j++) {
      if (boardArray[i][j] === ".") {
        boardArray[i][j] = "#";
        console.log("checking", i, j);
        log = i === 1 && j === 8;
        if (isGoingInCircles(boardArray, guardPositionX, guardPositionY))
          count++;
        boardArray[i][j] = ".";
      }
    }
  }

  return count;
};

console.log(countGoingInCircles(TEST_INPUT));
