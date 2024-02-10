import project from "../package.json" assert { type: "json" };

function main() {
  console.log(project.dependencies);
  const key = Object.keys(project.dependencies)[0];
  // fetch(`https://registry.npmjs.org/-/v1/search?text=${key}&size=1`).then(res => res.json()).then(res => console.log(res.objects[0]));
  fetch(`https://registry.npmjs.org/${key}`).then(res => res.json()).then(res => console.log(res));
  
  // Try the following endpoint for getting all the details at once
  // https://registry.npmjs.org/-/package/${packageNames.join(',')}/dist-tags
}

main();
