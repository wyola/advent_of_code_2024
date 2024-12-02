const TEST_INPUT = require("./TEST_INPUT");
const { processReports } = require("./2_helpers");

const safeReportsCount = (reportsString) => {
  return processReports(reportsString).safeReportsCount;
};

console.log(safeReportsCount(TEST_INPUT)); // 686
