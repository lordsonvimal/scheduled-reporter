import { getDependencies } from "./project_helper.mjs";

function fetchLatestVersions() {
  // fetch(`https://registry.npmjs.org/-/v1/search?text=${key}&size=1`).then(res => res.json()).then(res => console.log(res.objects[0]));

  getDependencies().forEach((dependency, index) => {
    fetch(`https://registry.npmjs.org/${dependency}`).then(res => res.json()).then(res => {
      console.log(`[Fetched]: ${index + 1}: ${dependency}`);
    });
  });

  // Try to fetch in less calls
  // fetch(`https://registry.npmjs.org/-/package/${getDependencies().join(',')}/dist-tags`).then(res => res.json()).then(res => console.log(res));
}

export {
  fetchLatestVersions
};
