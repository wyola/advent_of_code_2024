const TEST_INPUT = require("./TEST_INPUT");
const inputStringToTwoArrays = require("./1_helpers");

const countOccurences = (arr) => {
  return arr.reduce((countObj, num) => {
    countObj[num] = (countObj[num] || 0) + 1;
    return countObj;
  }, {});
};

const similarityScore = (inputString) => {
  const [leftArray, rightArray] = inputStringToTwoArrays(inputString);
  const rightArrayOccurences = countOccurences(rightArray);

  return leftArray.reduce(
    (acc, currentValue) =>
      Object.hasOwn(rightArrayOccurences, currentValue)
        ? acc + currentValue * rightArrayOccurences[currentValue]
        : acc,
    0
  );
};

console.log(similarityScore(TEST_INPUT))