import { Yarn4 } from "./yarn4.ts";
import { process } from "../process/process.ts";

type AuditReport = {
  critical: number,
  high: number,
  low: number,
  moderate: number
};

class Audit {
  command: string;
  report: AuditReport;

  constructor(command: string) {
    this.command = command;
    this.report = {
      critical: 0,
      high: 0,
      low: 0,
      moderate: 0
    };
  }

  print() {
    const { critical, high, low, moderate } = this.report;
    const total = critical + high + low + moderate;
    console.log(`Total vulnerabilities: ${total}, Critical: ${critical}, High: ${high}, Moderate: ${moderate}, Low: ${low}`);
  }
}

function audit() {
  const yarn = new Yarn4();
  process(yarn.command, (error, stdout, stderr) => {
    if (stderr) {
      console.error(`yarn audit command returned stderr: ${stderr}`);
      return;
    }

    yarn.audit(error, stdout, stderr);
  });
}

export {
  Audit,
  audit
}
