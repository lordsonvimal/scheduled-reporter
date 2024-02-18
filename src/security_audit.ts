import { exec } from "child_process";

function audit() {
  exec("yarn audit --json", (_error, stdout, stderr) => {
    if (stderr) {
      console.error(`yarn audit command returned stderr: ${stderr}`);
      return;
    }

    stdout.split('\n')
      .filter(line => line.trim() !== '')
      .forEach(line => {
        try {
          const json = JSON.parse(line);
          if (json.type === "auditSummary") {
            console.log(json.data.vulnerabilities);
          }
        } catch(err) {
          console.error("Error parsing JSON output:", err);
        }
      });
  });
}

export {
  audit
}
