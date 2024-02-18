import project from "../../package.json" assert { type: "json" };

type Dependency = keyof (typeof project.dependencies);
type DevDependency = keyof (typeof project.devDependencies);

function getDependencies() {
  return [
    ...Object.keys(project.dependencies),
    ...Object.keys(project.devDependencies)
  ] as (Dependency | DevDependency)[];
}

function getDependencyVersion(dependency: Dependency | DevDependency) {
  const dependencies = project.dependencies;
  let version = dependencies[dependency as Dependency] || project.devDependencies[dependency as DevDependency];
  version = version.replace("^", "").replace("~", "");
  return version;
}

export {
  getDependencies,
  getDependencyVersion
};
