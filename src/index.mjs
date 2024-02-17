import { reportLatestVersions } from "./package_versions.mjs";
import { audit } from "./security_audit.mjs";

function main() {
  // reportLatestVersions();
  audit();
}

main();
