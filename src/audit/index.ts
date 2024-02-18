import { exec } from "child_process";
import { Yarn4 } from "./yarn4.ts";

function audit() {
  const yarn = new Yarn4();
  exec(yarn.command, (error, stdout, stderr) => {
    if (stderr) {
      console.error(`yarn audit command returned stderr: ${stderr}`);
      return;
    }

    yarn.audit(error, stdout, stderr);
  });
}

export {
  audit
}
