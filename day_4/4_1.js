const TEST_INPUT = require("./TEST_INPUT");

function countXMASOccurrences(puzzleString) {
  const puzzleStringArray = puzzleString.split("\n");
  const word = "XMAS";
  const directions = [
    [0, 1], // Right
    [0, -1], // Left
    [1, 0], // Down
    [-1, 0], // Up
    [1, 1], // Diagonal down-right
    [1, -1], // Diagonal down-left
    [-1, 1], // Diagonal up-right
    [-1, -1], // Diagonal up-left
  ];
  const rows = puzzleStringArray.length;
  const cols = puzzleStringArray[0].length;
  let count = 0;

  function checkDirection(row, col, rowOffset, colOffset) {
    for (let i = 0; i < word.length; i++) {
      const newRow = row + i * rowOffset;
      const newCol = col + i * colOffset;
      if (
        newRow < 0 ||
        newRow >= rows ||
        newCol < 0 ||
        newCol >= cols ||
        puzzleStringArray[newRow][newCol] !== word[i]
      ) {
        return false;
      }
    }
    return true;
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      for (const [rowOffset, colOffset] of directions) {
        if (checkDirection(row, col, rowOffset, colOffset)) {
          count++;
        }
      }
    }
  }

  return count;
}

console.log(countXMASOccurrences(TEST_INPUT));
