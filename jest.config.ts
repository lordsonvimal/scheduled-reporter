import { Config } from "jest";

const config: Config = {
  collectCoverage: true,
  coverageReporters: ["json-summary", "text"]
}

export default config;
