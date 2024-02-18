import fs from "fs";
import { process } from "../process/index.ts";

function coverage() {
  process("yarn test --coverage --json --silent", (_error, _stdout, stderr) => {
    if (stderr) {
      console.error(`yarn audit command returned stderr: ${stderr}`);
    }

    try {
      // Parse JSON output
      const coverageReport = JSON.parse(fs.readFileSync("coverage/coverage-summary.json", "utf8"));
      const total = coverageReport.total;
      const lines = total.lines.pct;
      const statements = total.statements.pct;
      const branches = total.branches.pct;
      const functions = total.functions.pct;
      console.log(`Total Coverage = ${(lines + statements + branches + functions) / 4}%`);
    } catch (err) {
      console.error("Error parsing / reading JSON:", err);
    }
  });
}

export {
  coverage
}
