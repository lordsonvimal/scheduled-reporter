import { getDependencies, getDependencyVersion } from "./project_helper.mjs";
import semver from "semver";

function getLatestVersionInMajorRange(versions, version) {
  return versions.filter(v => semver.satisfies(v, `^${version}`)).sort(semver.compare).pop();
}

function getLatestVersion(versions) {
  return versions.sort(semver.compare).pop();
}

async function getVersionDetails(dependency, currentVersion) {
  try {
    const response = await fetch(`https://registry.npmjs.org/${dependency}`);
    const json = await response.json();
    const versions = Object.keys(json.versions);
    if (dependency === "semver") console.log(json);
    return {
      name: dependency,
      latest: getLatestVersion(versions),
      latestInCurrentMajor: getLatestVersionInMajorRange(versions, currentVersion),
      deprecated: json.versions[currentVersion]?.deprecated
    };
  } catch(e) {
    console.error(e);
  }
}

async function fetchLatestVersions() {
  const packageVersions = [];
  const dependencies = getDependencies();
  for (let i = 0; i < dependencies.length; i++) {
    const dependency = dependencies[i];
    const detail = await getVersionDetails(dependency, getDependencyVersion(dependency));
    packageVersions.push(detail);
    // console.log(detail);
  }
}

export {
  fetchLatestVersions
};
