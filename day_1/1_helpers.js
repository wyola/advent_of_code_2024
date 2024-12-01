const inputStringToTwoArrays = (inputString) => {
  const inputStringToArray = inputString
    .split("\n")
    .flatMap((line) => line.split(/\s+/));

  const [leftList, rightList] = inputStringToArray.reduce(
    ([evenIndeces, oddIndeces], currentValue, index) => {
      index % 2 === 0
        ? evenIndeces.push(Number(currentValue))
        : oddIndeces.push(Number(currentValue));
      return [evenIndeces, oddIndeces];
    },
    [[], []]
  );

  return [leftList, rightList];
};

module.exports = inputStringToTwoArrays;
