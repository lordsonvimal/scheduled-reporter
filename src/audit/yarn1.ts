import { AuditBase } from "./audit_base.ts";
import { process } from "../process/process.ts";

type Line = {
  type: "auditSummary" | string,
  data: {
    vulnerabilities: string
  }
}

class Yarn1 extends AuditBase {
  constructor() {
    super("yarn audit --json");
  }

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

  audit() {
    process(this.command, (_error, stdout, stderr) => {
      if (stderr) {
        console.error(`yarn audit command returned stderr: ${stderr}`);
        return;
      }

      stdout.split("\n")
      .filter(line => line.trim() !== "")
      .forEach(line => this.parseLine(line));
    });
  }
}

export {
  Yarn1
};
