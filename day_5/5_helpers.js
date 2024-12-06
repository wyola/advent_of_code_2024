const sumMiddleValues = (updates) => {
  return updates.reduce(
    (sumOfMiddleValues, update) =>
      sumOfMiddleValues + Number(update[Math.floor(update.length / 2)]),
    0
  );
};

module.exports = sumMiddleValues;
