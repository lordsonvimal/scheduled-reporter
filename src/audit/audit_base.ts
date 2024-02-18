type AuditReport = {
  critical: number,
  high: number,
  low: number,
  moderate: number
};

class AuditBase {
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
    console.log("\n");
    console.log("=====================================================================");
    console.log(`Total vulnerabilities: ${total}, Critical: ${critical}, High: ${high}, Moderate: ${moderate}, Low: ${low}`);
    console.log("=====================================================================");
    console.log("\n");
  }
}

export {
  AuditBase
}
