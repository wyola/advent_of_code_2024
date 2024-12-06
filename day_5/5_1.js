const TEST_INPUT = require("./TEST_INPUT");
const sumMiddleValues = require("./5_helpers");

function isUpdateValid(update, rules) {
  for (let i = 0; i < update.length - 1; i++) {
    const filteredRules = rules.filter((rule) => rule[1] === update[i]);
    const rightSide = update.slice(i);
    if (filteredRules.some((rule) => rightSide.includes(rule[0]))) return false;
  }
  return true;
}

const procesInput = (inputString) => {
  const linesArray = inputString.split(/\n+/);
  const regexUpdate = /^\d{2}(,\d{2})*$/;

  const indexOfFirstUpdate = linesArray.findIndex((element) =>
    element.match(regexUpdate)
  );

  const rules = linesArray
    .slice(0, indexOfFirstUpdate)
    .map((rule) => rule.split("|"));

  const updates = linesArray
    .slice(indexOfFirstUpdate)
    .map((update) => update.split(","));

  const { correctUpdates, incorrectUpdates } = updates.reduce(
    ({ correctUpdates, incorrectUpdates }, update) => {
      if (isUpdateValid(update, rules)) {
        correctUpdates.push(update);
      } else {
        incorrectUpdates.push(update);
      }
      return {
        correctUpdates,
        incorrectUpdates,
      };
    },
    { correctUpdates: [], incorrectUpdates: [] }
  );

  return { correctUpdates, incorrectUpdates, rules };
};

const { correctUpdates, incorrectUpdates, rules } = procesInput(TEST_INPUT);
console.log(sumMiddleValues(correctUpdates));

module.exports = { incorrectUpdates, rules };
