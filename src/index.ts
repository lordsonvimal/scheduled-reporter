// import { versions } from "./version/version.ts";
import { audit } from "./audit/audit.ts";
import { coverage } from "./coverage/coverage.ts";

function main() {
  // versions();
  audit();
  coverage();
}

main();
