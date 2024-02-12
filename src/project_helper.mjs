import project from "../package.json" assert { type: "json" };

function getDependencies() {
  return Object.keys(project.dependencies).concat(Object.keys(project.devDependencies));
}

function getDependencyVersion(dependency) {
  let version = project.dependencies[dependency] || project.devDependencies[dependency];
  version = version.replace("^", "").replace("~", "");
  return version;
}

export {
  getDependencies,
  getDependencyVersion
};
