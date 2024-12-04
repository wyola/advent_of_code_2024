const TEST_INPUT = require("./TEST_INPUT");

const extractCorrectInstructions = (inputString) => {
  return inputString.match(/mul\(\d+,\d+\)|don't\(\)|do\(\)/g);
};

const sumInstructions = (instructionsArray) => {
  let shouldCount = true;
  let count = 0;

  for (let i = 0; i < instructionsArray.length; i++) {
    if (instructionsArray[i] === "don't()") {
      shouldCount = false;
      continue;
    }
    if (instructionsArray[i] === "do()") {
      shouldCount = true;
      continue;
    }
    if (shouldCount) {
      const match = instructionsArray[i].match(/mul\((\d+),(\d+)\)/);
      const num1 = Number(match[1]);
      const num2 = Number(match[2]);
      count += num1 * num2;
    }
  }

  return count;
};

const correctInstuctions = extractCorrectInstructions(TEST_INPUT);
console.log(sumInstructions(correctInstuctions));
