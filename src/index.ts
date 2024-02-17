import { versions } from "./package_versions.ts";
import { audit } from "./security_audit.ts";
import { coverage } from "./test_coverage.ts";

function main() {
  versions();
  audit();
  coverage();
}

main();
