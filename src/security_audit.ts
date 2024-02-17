import { exec } from "child_process";

function audit() {
  console.log('Current working directory:', process.cwd());

  exec("yarn audit --json", (_error, stdout, stderr) => {
    if (stderr) {
      console.error(`yarn audit command returned stderr: ${stderr}`);
      return;
    }

    try {
      // Parse JSON output
      const auditResults = stdout.split('\n') // Split output into lines
        .filter(line => line.trim() !== '') // Filter out empty lines
        .map(line => JSON.parse(line)); // Parse each line as JSON
      console.log(auditResults);
      // Here, you can handle the audit results as needed
    } catch (parseError) {
      console.error('Error parsing JSON output:', parseError);
    }
  });
}

export {
  audit
}
