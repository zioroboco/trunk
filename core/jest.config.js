/**
 * @type {import("@jest/types").Config.InitialOptions}
 */
const config = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  globals: {
    "ts-jest": {
      diagnostics: { ignoreCodes: [151001] },
      isolatedModules: true,
      useESM: true,
    },
  },
}

export default config
