const path = require("path");

module.exports = {
  preset: "jest-expo",
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "./jest.setup.js",
  ],
  clearMocks: true,
  collectCoverage: false,
  transform: {},
};
