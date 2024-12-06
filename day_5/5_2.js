const TEST_INPUT = require("./TEST_INPUT");
const sumMiddleValues = require("./5_helpers");
const { incorrectUpdates, rules } = require("./5_1");

const orderIncorrectUpdate = (update, rules) => {
  let result = [];

  update.forEach((element) => {
    if (result.length === 0) {
      result.push(element);
      return;
    }

    const filteredRules = rules.filter(
      (x) => x[0] === element || x[1] === element
    );
    for (let i = 0; i <= result.length - 1; i++) {
      const right = result.slice(i);
      const left = result.slice(0, i);
      const isSmallerThanAllRight = !filteredRules.some(
        (rule) => rule[1] === element && right.includes(rule[0])
      );
      const isLargerThanAllLeft = !filteredRules.some(
        (rule) => rule[0] === element && left.includes(rule[1])
      );

      if (isSmallerThanAllRight && isLargerThanAllLeft) {
        result = [...left, element, ...right];
        return;
      }
    }
    result.push(element);
  });

  return result;
};

const processIncorrectUpdates = (incorrectUpdates, rules) => {
  const correctedUpdates = incorrectUpdates.map((element) =>
    orderIncorrectUpdate(element, rules)
  );

  return sumMiddleValues(correctedUpdates);
};
console.log(processIncorrectUpdates(incorrectUpdates, rules));
