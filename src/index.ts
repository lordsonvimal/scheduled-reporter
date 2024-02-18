// import { versions } from "./package_versions.ts";
import { audit } from "./audit/index.ts";
import { coverage } from "./coverage/coverage.ts";

function main() {
  // versions();
  audit();
  coverage();
}

main();
