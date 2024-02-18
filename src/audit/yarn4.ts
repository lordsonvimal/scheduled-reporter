import { Audit } from "./audit.ts";
import { ProcessCallback } from "../process/process.ts";

type Line = {
  value: string, // package name
  children: {
    ID: number,
    Issue: string,
    URL: string,
    Severity: "high" | "low" | "critical" | "moderate",
    "Vulnerable Versions": string,
    "Tree Versions": string[],
    Dependents: string[]
  }
}

class Yarn4 extends Audit {
  constructor() {
    super("yarn npm audit --json --no-deprecations");
  }

  parseLine(line: string) {
    try {
      const json = JSON.parse(line) as Line;
      this.report[json.children.Severity] += 1;
    } catch(err) {
      console.error("Error parsing JSON output:", err);
    }
  }

  audit: ProcessCallback = (_error, stdout, _stderr) => {
    stdout.split("\n")
      .filter(line => line.trim() !== "")
      .forEach(line => this.parseLine(line));
    this.print();
  }
}

export {
  Yarn4
};
