import { Audit } from "./index.ts";
import { ExecException } from "child_process";

type Line = {
  type: "auditSummary" | string,
  data: {
    vulnerabilities: string
  }
}

class Yarn1 extends Audit {
  command = "yarn audit --json";

  parseLine(line: string) {
    try {
      const json = JSON.parse(line) as Line;
      if (json.type === "auditSummary") {
        console.log(json.data.vulnerabilities);
      }
    } catch(err) {
      console.error("Error parsing JSON output:", err);
    }
  }

  audit(_error: ExecException | null, stdout: string, _stderr: string) {
    stdout.split("\n")
      .filter(line => line.trim() !== "")
      .forEach(line => this.parseLine(line));
  }
}

export {
  Yarn1
};
