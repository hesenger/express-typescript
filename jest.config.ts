import type { JestConfigWithTsJest } from "ts-jest";

const HALF_SECOND = 500;

const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest",
  verbose: false,
  testTimeout: HALF_SECOND,
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
};

export default jestConfig;
