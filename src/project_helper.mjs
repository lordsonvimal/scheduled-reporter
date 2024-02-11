import project from "../package.json" assert { type: "json" };

function getDependencies() {
  return Object.keys(project.dependencies).concat(Object.keys(project.devDependencies));
}

function getDependencyVersion(dependency) {
  console.log(dependency);
  return project.dependencies[dependency] || project.devDependencies[dependency];
}

export {
  getDependencies,
  getDependencyVersion
};
