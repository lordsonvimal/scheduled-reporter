import { Yarn4 } from "./yarn4.ts";

function audit() {
  const yarn = new Yarn4();
  yarn.audit();
}

export {
  audit
}
