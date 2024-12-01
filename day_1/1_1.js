const TEST_INPUT = require("./TEST_INPUT");
const inputStringToTwoArrays = require("./1_helpers");

const sumDistances = (inputString) => {
  const [leftListSorted, rightListSorted] = inputStringToTwoArrays(
    inputString
  ).map((list) => list.sort((a, b) => a - b));

  return leftListSorted.reduce(
    (acc, currentValue, index) =>
      acc + Math.abs(currentValue - rightListSorted[index]),
    0
  );
};

console.log(sumDistances(TEST_INPUT))
