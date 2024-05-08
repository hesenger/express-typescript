import type { JestConfigWithTsJest } from "ts-jest";

const ONE_SECOND = 1000;

const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest",
  verbose: false,
  testTimeout: ONE_SECOND,
};

export default jestConfig;
