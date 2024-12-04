const TEST_INPUT = require("./TEST_INPUT");

function countXMASPatterns(puzzleString) {
  const puzzleStringArray = puzzleString.split("\n");

  const rows = puzzleStringArray.length;
  const cols = puzzleStringArray[0].length;
  let count = 0;

  function isMAS(chars) {
    const validMAS = ["MAS", "SAM"];
    return validMAS.includes(chars.join(""));
  }

  for (let row = 1; row < rows - 1; row++) {
    for (let col = 1; col < cols - 1; col++) {
      const center = puzzleStringArray[row][col];

      const topLeftMAS = [
        puzzleStringArray[row - 1][col - 1],
        center,
        puzzleStringArray[row + 1][col + 1],
      ];
      const bottomLeftMAS = [
        puzzleStringArray[row + 1][col - 1],
        center,
        puzzleStringArray[row - 1][col + 1],
      ];

      if (isMAS(topLeftMAS) && isMAS(bottomLeftMAS)) {
        count++;
      }
    }
  }

  return count;
}

console.log(countXMASPatterns(TEST_INPUT));
