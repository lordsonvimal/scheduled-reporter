import { Audit } from "./index.ts";
import { ExecException } from "child_process";

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
  command = "yarn npm audit --json --no-deprecations";

  parseLine(line: string) {
    try {
      const json = JSON.parse(line) as Line;
      this.report[json.children.Severity] += 1;
    } catch(err) {
      console.error("Error parsing JSON output:", err);
    }
  }

  audit(_error: ExecException | null, stdout: string, _stderr: string) {
    stdout.split("\n")
      .filter(line => line.trim() !== "")
      .forEach(line => this.parseLine(line));
    this.print();
  }
}

export {
  Yarn4
};
