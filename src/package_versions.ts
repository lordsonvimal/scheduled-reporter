import { getDependencies, getDependencyVersion } from "./project_helper.ts";
import semver from "semver";

function getLatestVersionInMajorRange(versions: string[], version: string) {
  return versions.filter(v => semver.satisfies(v, `^${version}`)).sort(semver.compare).pop();
}

function getLatestVersion(versions: string[]) {
  return versions.sort(semver.compare).pop();
}

async function getVersionDetails(dependency: string, currentVersion: string) {
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

async function versions() {
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
  versions
};
