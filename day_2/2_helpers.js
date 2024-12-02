const isSorted = (arr) => {
  const arrayWithoutFirstElement = arr.slice(1);
  const isAscending = arrayWithoutFirstElement.every((num, i) => num >= arr[i]);

  if (isAscending) return true;

  const isDescending = arrayWithoutFirstElement.every(
    (num, i) => num <= arr[i]
  );

  return isDescending;
};

const isSafe = (arr) => {
  if (arr.length <= 1) return true;

  for (let i = 0; i < arr.length - 1; i++) {
    const diff = Math.abs(arr[i + 1] - arr[i]);
    const isLevelDifferenceSafe = diff >= 1 && diff <= 3;

    if (!isLevelDifferenceSafe) return false;
  }

  return isSorted(arr);
};

const processReports = (reportsString) => {
  const reportsStringToArray = reportsString
    .split("\n")
    .map((element) => element.split(" ").map(Number));

  return reportsStringToArray.reduce(
    (result, report) => {
      if (isSafe(report)) {
        result.safeReportsCount++;
      } else {
        result.unsafeReports.push(report);
      }
      return result;
    },
    { safeReportsCount: 0, unsafeReports: [] }
  );
};

module.exports = { isSafe, processReports };
