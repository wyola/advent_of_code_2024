const TEST_INPUT = require("./TEST_INPUT");
const { isSafe, processReports } = require("./2_helpers");

const isReportFixable = (unsafeReport) => {
  return unsafeReport.some((_, index) =>
    isSafe(unsafeReport.toSpliced(index, 1))
  );
};

const fixableReportsCount = (unsafeReports) => {
  return unsafeReports.reduce(
    (count, report) => count + (isReportFixable(report) ? 1 : 0),
    0
  );
};

const allSafeReportsCount = (reportsString) => {
  const { safeReportsCount, unsafeReports } = processReports(reportsString);
  return safeReportsCount + fixableReportsCount(unsafeReports);
};

console.log(allSafeReportsCount(TEST_INPUT));
