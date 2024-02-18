import { exec, ExecException } from "child_process";

export type ProcessCallback = (err: ExecException | null, stdout: string, stderr: string) => void;

function process(command: string, callback: ProcessCallback) {
  exec(command, callback);
}

export {
  process
}
