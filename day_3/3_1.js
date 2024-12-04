const TEST_INPUT = require("./TEST_INPUT");

const extractCorrectInstructions = (inputString) => {
  return inputString.match(/mul\(\d+,\d+\)/g);
};

const sumInstructions = (instructionsArray) => {
  return instructionsArray.reduce((result, instruction) => {
    const match = instruction.match(/mul\((\d+),(\d+)\)/);
    const num1 = Number(match[1]);
    const num2 = Number(match[2]);
    return result + num1 * num2;
  }, 0);
};

const correctInstructions = extractCorrectInstructions(TEST_INPUT);
console.log(correctInstructions)
console.log(sumInstructions(correctInstructions));
